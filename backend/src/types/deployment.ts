export type DeploymentStatus = "success" | "failed" | "in_progress";
export type Environment = "dev" | "staging" | "prod";

export interface Deployment {
  id: string;
  providerDeployId: string;
  repo: string;
  branch: string;
  serviceName: string;
  environment: Environment;
  status: DeploymentStatus;
  commitSha: string;
  source?: string;
  deployedAt: Date;
}