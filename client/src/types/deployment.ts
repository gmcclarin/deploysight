export type DeploymentStatus = "success" | "failed" | "in_progress";
export type Environment = "dev" | "staging" | "prod";

export interface Deployment {
  id: string;
  serviceName: string;
  environment: Environment;
  status: DeploymentStatus;
  commitSha: string;
  deployedAt: Date;
}