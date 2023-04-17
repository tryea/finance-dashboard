import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse } from "./types";


export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    reducerPath: "main",
    tagTypes: ["Kpis"],
    endpoints: (build) => ({
        // build.query<type1, type2> 
        // type1 is the data type of the response we received from the request
        // type2  is the data type of the payload we send as the request
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kpis/",
            providesTags: ["Kpis"],
        }),
    }),
});

export const { useGetKpisQuery } = api;