import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8000/api/v1/",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("access_token");
            if (token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    }),
    tagTypes: ["Posts", "Users", "Notifications"],
    endpoints: () => ({}),
});
