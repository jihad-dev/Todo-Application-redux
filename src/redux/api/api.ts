// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const baseApi = createApi({
//     reducerPath: 'api', // Unique key for the store
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), // Base API URL
//     endpoints: (builder) => ({
//         getTodos: builder.query({
//             query: () => ({
//                 url: '/todos',
//                 method: 'GET',
//             })
//         }),
//     }),
// });

// export const { useGetTodosQuery } = baseApi;