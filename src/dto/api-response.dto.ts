import { IApiResponse } from "../types/api-response.interface"

class ApiResponse implements IApiResponse {
    constructor(
        public code: number,
        public success: boolean,
        public data: any,
        public message: string
    ) { }

    static BadRequestException(message: string) { return new ApiResponse(400, false, null, message ? message : "Bad Request") }

    static InternalServerException() { return new ApiResponse(500, false, null, "Something went wrong, please try again later") }
}

export default ApiResponse