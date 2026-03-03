import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    status: "ok",
    service: "deploysight-api",
    timestamp: new Date().toISOString(),
  });
});

export default router;