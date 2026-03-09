import { api } from "./lib";
import { type Deployment, type DeploymentStats } from "../types/deployment";
import { useQuery } from "@tanstack/react-query";

export const getDeployments = async (): Promise<Deployment[]> => {
  const response = await api.get<Deployment[]>("/deployments");
  return response.data;
};

export const getDeploymentStats = async (): Promise<DeploymentStats> => {
  const response = await api.get<DeploymentStats>("/deployments/stats");
  return response.data;
};

export const useGetDeployments = () => {
  return useQuery({
    queryKey: ["deployments"],
    queryFn: getDeployments,
    refetchInterval: 5000, // Refetch every 5 seconds for real-time updates
  });
};

export const useGetDeploymentStats = () => {
  return useQuery({
    queryKey: ["deployment-stats"],
    queryFn: getDeploymentStats,
    refetchInterval: 5000, // Refetch every 5 seconds for real-time updates
  });
};
