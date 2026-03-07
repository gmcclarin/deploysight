import { AppDataSource } from "./data-source";
import app from "./app";
import "dotenv/config";

const PORT = process.env.API_PORT || 5050;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`DeploySight API running on port ${PORT}`);
    });
  })
  .catch((error) => console.error("DB connection error:", error));