import {api} from './api.service';
import {IAPIResponse} from "../../interfaces/ICommon";
import {IVendorBusinessDetail} from "../../interfaces/IPayment";


export class IntegratedBusinessService {
    public static async all(): Promise<IAPIResponse<IVendorBusinessDetail[]>> {
        const res = await api.get('user-business-details',{params:{pagination:false}})
        return res.data as IAPIResponse<IVendorBusinessDetail[]>;
    }
}