export interface ISendGuestVerificationCode {
    transaction_id : number
}

export interface IVerifyGuestUser {
    code: string
    guest_user_id: number
}

export interface IOpenDispute {
    payment_id: string | number
    comments: string
    dispute_media?: {
        path: string
        type: string
    }[]
}