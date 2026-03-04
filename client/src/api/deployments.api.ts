import {api} from "../api";

export interface Deployment {
  id: string;
  service_name: string;
  environment: "dev" | "staging" | "prod";
  status: "success" | "failed" | "in_progress";
  commit_sha: string;
  deployed_at: string;
  created_at: string;
}

export const getDeployments = async (): Promise<Deployment[]> => {
  const response = await api.get<Deployment[]>("/deployments");
  return response.data;
};