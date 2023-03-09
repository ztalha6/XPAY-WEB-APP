import {Modal} from 'antd';
import React, {Dispatch, SetStateAction, useState} from 'react';
// import "../../assets/css/components/dashboard/theme-modal.scss";
// import {useUserContext} from "../providers/UserProvider";
// import {useAppSelector} from "../hooks/redux.hooks";

interface IModal {
    active: boolean,
    setActive:Dispatch<SetStateAction<boolean>>,
    title?:string,
    children:JSX.Element | JSX.Element[],
    formId?:string
    reloadTable?:any
    width? : string | number
    class? : string
}

export default function ThemeModal(options:IModal) {
    const [visible, setVisible] = useState<boolean>(options.active);
    const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
    const [modalText, setModalText] = useState<string>('Content of the modal');
    const [loading, setLoading] = useState(false);
    const showModal = () => {
        options.setActive( true);
    };

    const handleOk = async () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        if(options?.reloadTable) await options?.reloadTable()
    };

    const handleCancel = async() => {
        console.log('Clicked cancel button');
        if(options?.reloadTable) await options?.reloadTable()
        options.setActive(false);
    };
    return (
        <>
            <Modal
                transitionName={"none"}
                className={`theme-modal ${options.class ? options.class : ''}`}
                title={options.title? options.title : ''}
                visible={options.active}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={options.width ? options.width : 1300}
                footer={null}
                centered

            >
                {options.children}
            </Modal>
        </>
    );
};
