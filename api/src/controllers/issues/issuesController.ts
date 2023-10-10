import { Request, Response } from "express";
import { IssuesServices } from "../../services/issues/issuesServices";

export const IssuesController = {
  list: async (request: Request, response: Response) => {
    try {
      const data = IssuesServices.list();
      response.json({ data });
    } catch (error: any) {
      response.status(500).json({ error: error.message });
    }
  },
  get: async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      const data = IssuesServices.get(Number(id));
      response.json({ data });
    } catch (error: any) {
      response.status(500).json({ error: error.message });
    }
  },
  delete: async (request: Request, response: Response) => {
    const { id } = request.params;
    try {
      const data = IssuesServices.delete(Number(id));
      response.json({ data });
    } catch (error: any) {
      response.status(500).json({ error: error.message });
    }
  },
  post: async (request: Request, response: Response) => {
    const issue = request.body;
    try {
      const data = IssuesServices.post(issue);
      response.json({ data });
    } catch (error: any) {
      response.status(500).json({ error: error.message });
    }
  },
  put: async (request: Request, response: Response) => {
    const { id } = request.params;
    const issue = request.body;
    try {
      const data = IssuesServices.put(Number(id), issue);
      response.json({ data });
    } catch (error: any) {
      response.status(500).json({ error: error.message });
    }
  },
};
