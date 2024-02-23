import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://iim.etherial.fr';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (id) => `products/${id}/comments`,
            providesTags: ['comments'],
        }),
    }),
});

export const { useGetCommentsQuery } = apiSlice;

export const productAPI = createApi({
    tagTypes: ['products'],
    reducerPath: 'productAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `products`,
            providesTags: ['products'],
        }),
        createProduct: builder.mutation({
            query: (data) => ({
                url: '/products',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['products'],
        }),
    }),
});

export const { useGetProductsQuery, useCreateProductMutation } = productAPI;

export const commentsAPI = createApi({
    tagTypes: ['comments'],
    reducerPath: 'commentsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: ({ productId, ...data }) => ({
                url: `products/${productId}/comments`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comments'],
        }),
    }),
});

export const { useCreateCommentMutation } = commentsAPI;