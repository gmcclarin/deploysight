import { AppDataSource } from "../data-source";
import { Deployment } from "../entities/DeploymentEntity";


export class DeploymentRepository {
    private typeOrmRepository;

    constructor(){
        this.typeOrmRepository = AppDataSource.getRepository(Deployment);
    }

    public async find(): Promise<Deployment[]> {
        try {
            return await this.typeOrmRepository.find();
        } catch ( error ) {
            throw error;
        }
    }

    public async create(deploymentData: Omit<Deployment, "id" | "deployedAt">): Promise<Deployment> {
        try {
            const deployment = this.typeOrmRepository.create(deploymentData);
            return await this.typeOrmRepository.save(deployment);
        } catch ( error ) {
            throw error;
        }
    }
}