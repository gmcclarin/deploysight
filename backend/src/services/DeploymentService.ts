import { DeploymentRepository } from "../db/deployment.repository";
import { DeploymentStats } from "../types/deployment";

export class DeploymentService {
  private deploymentRepository;

  constructor() {
    this.deploymentRepository = new DeploymentRepository();
  }

  public async getDashboardStats(): Promise<DeploymentStats> {
    const latest =
      await this.deploymentRepository.findLatestPerRepoEnvironment();

    return {
      total: latest.length,
      success: latest.filter((d) => d.status === "success").length,
      failed: latest.filter((d) => d.status === "failed").length,
      deploying: latest.filter((d) => d.status === "building").length,
    };
  }
}
