import {api} from "../api";
import { type Deployment } from "../types/deployment";
import { useQuery } from "@tanstack/react-query";


export const getDeployments = async (): Promise<Deployment[]> => {
  const response = await api.get<Deployment[]>("/deployments");
  return response.data;
};

export const useGetDeployments = () => {
  return useQuery({
    queryKey: ["deployments"],
    queryFn: getDeployments
  });
};