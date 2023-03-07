const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');

export const apiReducer = createApi({
	reducerPath: 'apiReducer',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://portfolio-server-xa7k-bv90-main-kposozymga-wm.a.run.app/',
	}),
	endpoints: (builder) => ({
		getSampleData: builder.query({
			query: (data) => `${data}`,
		}),
	}),
});

export const { useGetSampleDataQuery } = apiReducer;
