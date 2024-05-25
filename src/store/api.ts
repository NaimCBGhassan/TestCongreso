import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DTOPreferenceReq } from "./DTO/Preference";

// Define a service using a base URL and expected endpoints
export const mpApi = createApi({
  reducerPath: "MP_API",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    postPreference: builder.mutation<
      { preferenceId: string },
      DTOPreferenceReq
    >({
      query: ({ DNI, firstName, lastName, phoneNumber, mail }) => {
        return {
          url: `/createPreference`,
          method: "POST",
          body: { DNI, firstName, lastName, phoneNumber, mail },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { usePostPreferenceMutation } = mpApi;
