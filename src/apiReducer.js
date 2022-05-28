const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');

export const apiReducer = createApi({
  reducerPath: 'apiReducer',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://eddiejorden-tech-portfolio-server-main-kposozymga-wm.a.run.app/' }),
  endpoints: (builder) => ({
    getSampleData: builder.query({
      query: (data) => `${data}`,
    }),
  }),
});

export const { useGetSampleDataQuery } = apiReducer;
