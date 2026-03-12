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

export interface DeploymentStats {
  total: number;
  success: number;
  failed: number;
  deploying: number;
}

