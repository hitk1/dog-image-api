export class AppError {
    public readonly statusCode: number
    public readonly message: string
    public readonly errorCode: string
    public readonly payload: any

    constructor(message: string, statusCode: number = 400, errorCode: string = 'error', payload: any = null) {
        this.message = message
        this.statusCode = statusCode
        this.errorCode = errorCode
        this.payload = payload
    }
}