import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Deployment } from "../entities/DeploymentEntity";
import { DeploymentRepository } from "../db/deployment.repository";

const router = Router();
const repo = new DeploymentRepository();

router.get("/", async (_, res) => {
  const deployments = await repo.find();
  res.json(deployments);
});

router.post("/", async (req, res) => {
  const deployment = await repo.create(req.body);
  res.status(201).json(deployment);
});

export default router;