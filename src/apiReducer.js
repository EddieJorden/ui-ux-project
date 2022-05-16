const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');

export const apiReducer = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8888' }),
  endpoints: (builder) => ({
    getSampleData: builder.query({
      query: (data) => `${data}`,
    }),
  }),
});

export const { useGetSampleDataQuery } = apiReducer;
