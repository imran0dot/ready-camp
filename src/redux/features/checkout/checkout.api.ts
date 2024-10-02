import baseApi from "../../api/baseApi";

const checkoutApi = baseApi.injectEndpoints({
    endpoints: (builders) => ({
        createOrder: builders.mutation({
            query: (createOrderData) => ({
                url: '/create-order',
                body: createOrderData.checkout,
                method: "POST"
            })
        })
    })
});

export const { useCreateOrderMutation } = checkoutApi;