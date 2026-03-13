export type DeploymentStatus = "success" | "failed" | "building";
export type Environment = "development" | "staging" | "production";

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

