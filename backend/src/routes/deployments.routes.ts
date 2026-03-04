import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Deployment } from "../entities/DeploymentEntity";

const router = Router();
const repo = AppDataSource.getRepository(Deployment);

router.get("/", async (_, res) => {
  const deployments = await repo.find({
    order: { deployed_at: "DESC" },
  });
  res.json(deployments);
});

router.post("/", async (req, res) => {
  const deployment = repo.create(req.body);
  const result = await repo.save(deployment);
  res.status(201).json(result);
});

export default router;