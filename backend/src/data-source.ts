import "reflect-metadata";
import { DataSource } from "typeorm";
import { Deployment } from "./entities/DeploymentEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "deploysight",
  synchronize: true, // dev only
  logging: false,
  entities: [Deployment],
  migrations: [],
  subscribers: [],
});