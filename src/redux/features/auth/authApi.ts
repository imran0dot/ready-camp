import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builders) => ({
        register: builders.mutation({
            query: (userInfo) => ({
                url: "/user",
                body: userInfo,
                method: "POST"
            })

        }),
        login: builders.mutation({
            query: (userInfo) => ({
                url: "/user/login",
                method: "POST",
                body: userInfo
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation } = authApi;