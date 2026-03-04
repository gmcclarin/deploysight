import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

export type DeploymentStatus = "success" | "failed" | "in_progress";
export type Environment = "dev" | "staging" | "prod";

@Entity()
export class Deployment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  service_name!: string;

  @Column()
  environment!: Environment;

  @Column()
  status!: DeploymentStatus;

  @Column()
  commit_sha!: string;

  @Column({ type: "timestamp" })
  deployed_at!: Date;

  @CreateDateColumn()
  created_at!: Date;
}