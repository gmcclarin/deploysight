import { Router } from "express";
import { DeploymentRepository } from "../db/deployment.repository";
import parserRegistry from "../webhooks/parsers";

const router = Router();

const deploymentRepo = new DeploymentRepository();

router.post("/:source", async (req, res) => {
  try {
    const { source } = req.params;
    const payload = req.body;

    console.log(`${source} webhook received:`, payload);

    const parser = parserRegistry.getParser(source);
    const normalizedData = parser.parse(payload);

    const deployment = await deploymentRepo.create(normalizedData);

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