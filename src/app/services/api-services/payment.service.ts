import {api} from './api.service';
import {IAPIResponse} from "../../interfaces/ICommon";
import {IPaymentListing} from "../../interfaces/IPayment";


export class PaymentServices {
    public static async getById(id:string|number|undefined): Promise<IAPIResponse<IPaymentListing>> {
        const res = await api.get(`get-payment-by-user/${id}`)
        return res.data as IAPIResponse<IPaymentListing>;
    }
}