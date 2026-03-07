import { Request, Response, Router } from "express";
import { DeploymentRepository } from "../db/deployment.repository";

const router = Router();
const repo = new DeploymentRepository();

router.get("/", async (_, res: Response) => {
  const deployments = await repo.find();
  res.json(deployments);
});

router.post("/", async (req: Request, res: Response) => {
  const deployment = await repo.create(req.body);
  res.status(201).json(deployment);
});

export default router;