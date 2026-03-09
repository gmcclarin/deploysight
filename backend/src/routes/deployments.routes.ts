import { Request, Response, Router } from "express";
import { DeploymentRepository } from "../db/deployment.repository";
import { DeploymentService } from "../services/DeploymentService";

const router = Router();
const repo = new DeploymentRepository();
const service = new DeploymentService();

router.get("/", async (_, res: Response) => {
  const deployments = await repo.find();
  res.json(deployments);
});

router.get("/stats", async (_, res: Response) => {
  const latest = await service.getDashboardStats();
  res.json(latest);
});

router.post("/", async (req: Request, res: Response) => {
  const deployment = await repo.create(req.body);
  res.status(201).json(deployment);
});

export default router;