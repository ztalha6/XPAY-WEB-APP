import {api} from './api.service';
import {IAPIResponse} from "../../interfaces/ICommon";
import {IOpenDispute, ISendGuestVerificationCode, IVerifyGuestUser} from "../../interfaces/IDispute";


export class DisputeService {

    public static async sendGuestVerificationCode(data:ISendGuestVerificationCode): Promise<IAPIResponse<any>> {
        const res = await api.post('send-guest-verification-code', data)
        return res.data as IAPIResponse<any>;
    }

    public static async verifyGuestUser(data:IVerifyGuestUser): Promise<IAPIResponse<any>> {
        const res = await api.post('verify-guest-user', data)
        return res.data as IAPIResponse<any>;
    }

    public static async openDispute(data:IOpenDispute): Promise<IAPIResponse<any>> {
        const res = await api.post('open-dispute', data)
        return res.data as IAPIResponse<any>;
    }
}