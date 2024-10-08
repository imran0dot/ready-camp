import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:6002/api",
        credentials: 'include',
    }),
    endpoints: () => ({}),
});

export default baseApi;