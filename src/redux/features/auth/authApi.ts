import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builders) => ({
        register: builders.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                body: userInfo,
                method: "POST"
            })

        }),
        login: builders.mutation({
            query: (userInfo) => ({
                url: "/user/login",
                body: userInfo,
                method: "POST"
            })
        })
    })
});

export const { useRegisterMutation, useLoginMutation } = authApi;