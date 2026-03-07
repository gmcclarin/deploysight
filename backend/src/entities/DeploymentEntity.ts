import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Deployment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  repo!: string;

  @Column()
  branch!: string;

  @Column()
  commitSha!: string;

  @Column()
  environment!: string;

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