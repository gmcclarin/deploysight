export type DeploymentStatus = "success" | "failed" | "in_progress";
export type Environment = "dev" | "staging" | "prod";

export interface Deployment {
  id: string;
  service_name: string;
  environment: Environment;
  status: DeploymentStatus;
  commit_sha: string;
  deployed_at: Date;
}