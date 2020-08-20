    import * as axios from "axios";

    const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {"API-KEY": "373ad996-6869-4c21-bcf4-7d39910a187f"}
    })

    export const userAPI = {
         getUser(currentPage, pageSize)  {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => {
                    return response.data
                })
        },
        follow(userId){
           return  instance.post (`follow/${userId}`
                )
        },
        unfollow(userId){
            return instance.delete (`follow/${userId}`)},
        getProfile(userId) {
            return profileAPI.getProfile(userId)
        }
    }


    export const profileAPI = {

        getProfile(userId) {
            return instance.get(`profile/` + userId)
        },
        getStatus(userId){
            return instance.get(`profile/status/` + userId)
        },
        updateStatus(status ){
            return instance.put(`profile/status`, {status:status})
        }
    }

    export const authAPI = {
        me () {
            return instance.get(`auth/me`)
        }
    }


