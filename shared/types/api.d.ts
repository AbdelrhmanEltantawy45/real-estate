export interface ErrorResponse {
    success: false,
    message: string,
}

export interface SuccessResponse<T> {
    success: true,
    message: string,
    data: T,
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse