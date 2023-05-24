import { useQuery, UseQueryResult } from "react-query";
import { IResponse } from "./types";
import api from "../../../api";
import { API_KEY } from "../../../util/constant";

type QueryType = (value: string) => UseQueryResult<IResponse, unknown>;

export const useGetCurrentWeatherQuery: QueryType = (value) => {
  return useQuery(
    ["get/weather", value],
    async ({ signal }) => {
      try {
        const { data } = await api.get(
          `current?access_key=${API_KEY}&query=${value}&lang=ru`,
          {
            signal,
          }
        );

        return data;
      } catch (error) {
        console.log("Error: ", error);
      }
    },
    { refetchOnMount: true }
  );
};
