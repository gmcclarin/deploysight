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
  environment: string;
  status: "success" | "failed" | "running";
  source: string;
  deployedAt: Date;
}