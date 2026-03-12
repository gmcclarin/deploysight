import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Unique,
} from "typeorm";

@Unique(["providerDeployId"])
@Entity()
export class Deployment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  providerDeployId!: string;

  @Column()
  repo!: string;

  @Column()
  branch!: string;

  @Column()
  commitSha!: string;

  @Column()
  environment!: string;

  @Column()
  source!: string;

  @Column()
  status!: string;

  @CreateDateColumn()
  deployedAt!: Date;
}


// example
// repo: deploysight
// branch: main
// commit: a3f9e21
// environment: production
// status: success
// deployedAt: 2026-03-04T22:00