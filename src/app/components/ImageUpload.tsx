import {Modal, Upload, UploadProps} from 'antd';
import type {RcFile, UploadFile} from 'antd/es/upload/interface';
import React, {useEffect, useState} from 'react';
import AWS from "aws-sdk";
import ImgCrop from "antd-img-crop";
import {fileToBase64} from "../services/helper/base";
import {BACKEND_CONSTANTS} from "../config/constants";

interface IUploadBox {
    maxCount:number
    setValue: any
    getValues?: any
    fieldName: string
    body?:any
    autoHideAfterUpload?: boolean
    aspect?:number
    disabled?:boolean
    value? : any
    label? : string
}
interface previewImage {
    image: string
    titie: string
    isOpen: boolean
}

export default function ImageUpload({maxCount, setValue, fieldName, body, autoHideAfterUpload,aspect,disabled,value, getValues,label} : IUploadBox){
    const defaultPreviewImage = {
        image: "",
        titie: "",
        isOpen: false
    }
    const [fileList, setFileList] = useState<UploadFile[]>([])
    const [error, setError] = useState<string|null>(null);
    const [previewImage, setPreviewImage] = useState<previewImage>(defaultPreviewImage);
    const onChange: UploadProps['onChange'] = async (info) => {
        setError(null)
        console.log(`info`,info)
        console.log(`getValue`,getValues)
        if(info.file.status === 'uploading'){
            setFileList(info.fileList);
        }

        if(info.file.status === 'done'){
            console.log("status done")
            setFileList(info.fileList);
            if(autoHideAfterUpload){
                setTimeout(function(){
                    setFileList(fileList.filter(file=>file.uid !== info.file.uid));
                },1000)
            }
        }


        if(info.file.status === 'removed'){
            setFileList(info.fileList);
            setValue( getValues?.filter((item: any)=> item.uid !== info.file.uid))
        }
    };

    const uploadFiles = async(options:any)=>{

        const {action,
            data,
            file,
            filename,
            headers,
            onError,
            onProgress,
            onSuccess,
            withCredentials} = options
        console.log(file)
        const newFileName = `${new Date().getTime()}${file.name}`;
        const fileSize = file.size;


        if (fileSize > parseInt(BACKEND_CONSTANTS.S3CREDENTIAL.fileSize, 10)) {
            setFileList([]);
            setError("File size exceeded!")
            return false
        }


        AWS.config.update({
            accessKeyId: BACKEND_CONSTANTS.S3CREDENTIAL.accessKeyId,
            secretAccessKey: BACKEND_CONSTANTS.S3CREDENTIAL.secretAccessKey
        });

        const S3 = new AWS.S3({region:'ap-south-1'});
        const objParams = {
            Bucket: BACKEND_CONSTANTS.S3CREDENTIAL.bucketName,
            Key: BACKEND_CONSTANTS.S3CREDENTIAL.dirName + "/" + newFileName,
            Body: file,
            ACL:'public-read',
            ContentType: file.type // TODO: You should set content-type because AWS SDK will not automatically set file MIME
        };

        S3.putObject(objParams)
            .on("httpUploadProgress", function({ loaded, total }: {loaded: any, total: any}) {
                onProgress(
                    {
                        percent: Math.round((loaded / total) * 100)
                    },
                    file
                );
            })
            .send(function(err:any, data:any) {
                if (err) {
                    onError();
                    console.log(err.code);
                    console.log(err.message);
                    setFileList([]);
                } else {
                    console.log("uploaded successfully")
                    onSuccess("Ok", file);
                    if(maxCount > 1 && Array.isArray(value) && getValues && getValues){
                        /*
                        * For multiple images - Has Many relationship
                        * */

                        setValue( [
                            ...getValues,
                            {
                                path: `${objParams.Key}`,
                                uid: file.uid
                            }
                        ])
                    }else{
                        /*
                        * For single image - HasOne relationship
                        * */
                        setValue( [
                            {
                                path: `${objParams.Key}`,
                                uid: file.uid
                            }
                        ])
                    }
                    console.log(`File uploaded`, `${BACKEND_CONSTANTS.S3CREDENTIAL.s3EndPoint}/${objParams.Key}`)

                }
            })


    };


    const onPreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await fileToBase64(file.originFileObj as RcFile);
        }
        setPreviewImage({
            image: file.url || (file.preview as string),
            titie: file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
            isOpen: true
        })
    };
    const onPreviewCancel = () => {
        setPreviewImage({
            image: "",
            titie: "",
            isOpen: false
        })
    }

    useEffect(()=> {
        if(maxCount > 1 && Array.isArray(value)) {
            /*
            * For multiple images - Has Many relationship
            * */
            // debugger
            const fileListStructure:UploadFile[] = []
            for(let v of value){
                fileListStructure.push({
                    uid: `-${v.id}`,
                    name: '',
                    status: 'done',
                    url: v.mediaUrl,
                })
            }
            console.log("RUN VALUES", fileListStructure)
            setFileList(fileListStructure);
        }else{
            /*
            * For single image - HasOne relationship
            * */
            if(typeof value === 'string'){
                setFileList([
                    {
                        uid: '-1',
                        name: '',
                        status: 'done',
                        url: value,
                    }
                ])
            }
        }


    },[value?.length])

    return(
        <div className={"image-upload"}>
            {label &&  <label>{label ? label : 'Upload Image'}</label>}
            <ImgCrop rotate  aspect={aspect? aspect : 1/1}>
                <Upload
                    beforeUpload={()=>true}
                    accept="image/*"
                    customRequest={uploadFiles}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    maxCount={maxCount}
                    multiple={false}
                    disabled={disabled}
                >
                    {body? body : (fileList.length < maxCount && '+ Upload')  }
                </Upload>
            </ImgCrop>
            <Modal transitionName={''} open={previewImage.isOpen} title={previewImage.titie} footer={null} onCancel={onPreviewCancel}>
                <img alt="Preview-image" className={"image-preview"} src={previewImage.image} />
            </Modal>
            <small className={"error-message"}>{error}</small>
        </div>
    );
}