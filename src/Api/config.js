export const BASE_PATH = 'https://acta.webart.work'

export default{
    auth:{
        register: BASE_PATH + '/api/user/signup',
        login: BASE_PATH + '/api/user/login',
        verifySMS: BASE_PATH + '/api/user/verify/sms',
        logout: BASE_PATH + '/api/user/logout',
    }
}