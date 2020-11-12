export const BASE_PATH = 'https://acta.webart.work'

export default{
    auth:{
        register: BASE_PATH + '/api/user/signup',
        login: BASE_PATH + '/api/user/login',
        verifySMS: BASE_PATH + '/api/user/verify/sms',
        logout: BASE_PATH + '/api/user/logout',
        status: BASE_PATH + '/api/user/status',
        resetPassword: BASE_PATH + '/api/user/request',
        saveNewPassword: BASE_PATH + '/api/user/change',
        confirmPinCode: BASE_PATH + '/api/user/verify/pin',
        profilePicture: BASE_PATH + '/api/user/avatar',
        userInfo: BASE_PATH + '/api/user/me',
    }
}