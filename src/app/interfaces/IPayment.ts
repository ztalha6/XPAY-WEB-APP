import {IListGeneric} from "./ICommon";

export interface ITrackPayment {
    track_num : number
}

export interface IPaymentListing {
    amount : number,
    status : string,
    id: number,
    payment_order_items: IPaymentOrderItem[]
    vendor_business_detail: IVendorBusinessDetail
}

export interface IPaymentOrderItem extends IListGeneric{
    name: string,
    price: number,
    qty: number
}

export interface IVendorBusinessDetail extends IListGeneric{
    business_name: string
    business_address: string
    website_url: string
}

