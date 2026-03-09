import { Router } from "express";
import { DeploymentRepository } from "../db/deployment.repository";

const router = Router();

const deploymentRepo = new DeploymentRepository();

router.post("/netlify", async (req, res) => {
  try {
    const payload = req.body;

    console.log("Netlify webhook received:", payload);

    const deployment = deploymentRepo.create({
      providerDeployId: payload.id || "unknown",
      repo: payload.name || "unknown",
      branch: payload.branch || "unknown",
      commitSha: payload.commit_ref || "unknown",
      environment: "production",
      status: payload.state === "ready" ? "success" : payload.state,
      deployedAt: payload.created_at ? new Date(payload.created_at) : new Date(),
      source: "netlify",
    });

    res.status(200).json({
      message: "Webhook processed",
      deployment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Webhook processing failed" });
  }
});

export default router;