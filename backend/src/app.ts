import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes";
import deploymentRoutes from "./routes/deployments.routes";
import webhookRoutes from "./routes/webhooks.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/deployments", deploymentRoutes);
app.use("/api/webhooks", webhookRoutes);

export default app;