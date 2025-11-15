import { baseApi } from "../../api/baseApi";
import type { Post } from "../../types/Post";

export const postsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "/posts",
            providesTags: ["Posts"],
        }),

        addPost: builder.mutation<Post, Partial<Post>>({
            query: (body) => ({
                url: "/posts",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Posts"],
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation } = postsApi;
