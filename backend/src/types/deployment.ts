export type DeploymentStatus = "success" | "failed" | "building";
export type Environment = "development" | "staging" | "production";

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

export interface DeploymentStats {
  total: number;
  success: number;
  failed: number;
  deploying: number;
}

export interface NormalizedDeployment {
  providerDeployId: string;
  repo: string;
  branch: string;
  commitSha: string;
  environment: Environment;
  status: DeploymentStatus;
  source: string;
  deployedAt: Date;
}

//======= route types ==========

export type CreateDeploymentDTO = {
  providerDeployId: string;
  repo: string;
  branch: string;
  commitSha: string;
  environment: string;
  status: string;
  source: string;
  deployedAt?: Date;
};