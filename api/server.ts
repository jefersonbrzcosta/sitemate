import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import IssuesRoutes from "./src/routes/issues/issuesRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/issues", IssuesRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
