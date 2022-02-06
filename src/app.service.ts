// import { SQLconnection } from "./config/mysql.config"

import ApiResponse from "./dto/api-response.dto";

export default class AppService {

    async healthCheck() {
        return new ApiResponse(200, true, null, 'Hello request, Server is working fine^_^');
        // return ApiResponse.BadRequestException();
        // return 'success response'
    }

}