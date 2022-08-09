import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
	baseUrl: "https://nabdh.alwaysdata.net/",
});

export const nabdhApi = createApi({
	reducerPath: "nabdhApi",
	baseQuery,
	tagTypes: ["Associations", "Doners"],
	endpoints: (builder) => ({
		getAssociations: builder.query({
			query: () => ({ url: `association/`, method: "GET" }),
			providesTags: ["Associations"],
		}),
		getEvents: builder.query({
			query: () => ({ url: `event/`, method: "GET" }),
			providesTags: ["Events"],
		}),

		login: builder.mutation({
			query: (data) => {
				return {
					url: "login/",
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["Associations"],
		}),
		signup: builder.mutation({
			query: (data) => {
				return {
					url: "signup/",
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["Associations"],
		}),
		updateAssociation: builder.mutation({
			query: (data) => {
				return {
					url: "association/update.php",
					method: "POST",
					body: data,
				};
			},
			invalidatesTags: ["Associations"],
		}),
	}),
});

export const {
	useGetAssociationsQuery,
	useLoginMutation,
	useSignupMutation,
	useUpdateAssociationMutation,
} = nabdhApi;
