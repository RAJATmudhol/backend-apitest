import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { sequelize } from "../src/config/database.ts";
import authRoutes from "./routes/authRoutes.ts";
import analyticsRoutes from "./routes/analytics.ts";
import db from "./models/index.ts";
import {setupSwagger} from "../src/swagger/swagger.ts"


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// app.use(passport.initialize());
// app.use(passport.session());

setupSwagger(app)

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);


const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log(' Connected to PostgreSQL');

    await db.sequelize.sync({ alter: true });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(' Error starting server:', error);
  }
};

startServer();

export default app;
