import { SQLconnection } from "./config/mysql.config"

export default class AppService {

    async healthCheck() {
        return 'success response'
    }

    async login(loginDto: any) {
        if (loginDto.username && loginDto.password) {
            try {
                await SQLconnection.promise().query(`INSERT INTO USER VALUES('${loginDto.username}','${loginDto.password}')`)
            }
            catch (e) {
                console.log(e)
            }
            return 'Hello ' + loginDto.username + " your password is " + loginDto.password
        }
        else {
            return 'Incompelete creds'
        }

    }
}