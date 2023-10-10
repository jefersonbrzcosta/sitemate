import Router from "express";
import { IssuesController } from "../../controllers/issues/issuesController";

const IssuesRoutes = Router();

IssuesRoutes.get("/", IssuesController.list);
IssuesRoutes.post("/", IssuesController.post);
IssuesRoutes.put("/:id", IssuesController.put);
IssuesRoutes.delete("/:id", IssuesController.delete);
IssuesRoutes.get("/:id", IssuesController.get);

export default IssuesRoutes;
