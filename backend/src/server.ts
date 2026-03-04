import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(process.env.API_PORT, () => {
      console.log(`DeploySight API running on port ${process.env.API_PORT}`);
    });
  })
  .catch((error) => console.error("DB connection error:", error));