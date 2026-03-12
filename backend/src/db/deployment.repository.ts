import { AppDataSource } from "../data-source";
import { Deployment } from "../entities/DeploymentEntity";
import { CreateDeploymentDTO } from "../types/deployment";

export class DeploymentRepository {
  private typeOrmRepository;

  constructor() {
    this.typeOrmRepository = AppDataSource.getRepository(Deployment);
  }

  public async find(): Promise<Deployment[]> {
    try {
      return await this.typeOrmRepository.find();
    } catch (error) {
      throw error;
    }
  }


  public async findRecent(limit = 50): Promise<Deployment[]> {
    return this.typeOrmRepository.find({
      order: { deployedAt: "DESC" },
      take: limit,
    });
  }

  public async findLatestPerRepoEnvironment(): Promise<Deployment[]> {
  return this.typeOrmRepository
    .createQueryBuilder("deployment")
    .distinctOn(["deployment.repo", "deployment.environment"])
    .orderBy("deployment.repo")
    .addOrderBy("deployment.environment")
    .addOrderBy("deployment.deployedAt", "DESC")
    .getMany();
}

  public async create(
    deploymentData: CreateDeploymentDTO,
  ): Promise<Deployment> {
    try {
      const deployment = this.typeOrmRepository.create({
        ...deploymentData,
        deployedAt: deploymentData.deployedAt ?? new Date(),
      });
      return await this.typeOrmRepository.save(deployment);
    } catch (error) {
      throw error;
    }
  }
}
