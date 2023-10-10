import { data } from "../../mockData/issues";

export interface IssuePayload {
  title: string;
  description: string;
}

export const IssuesServices = {
  list: () => {
    return data;
  },

  get: (issueId: number) => {
    if (!issueId) throw new Error("The ID is required for this request");

    const retrievedData = data.find(({ id }) => id === issueId);

    if (!retrievedData)
      throw new Error("No Issues has been found with the sent ID");

    return retrievedData;
  },

  delete: (issueId: number) => {
    if (!issueId) throw new Error("The ID is required for this request");

    const retrievedData = data.find(({ id }) => id === issueId);

    if (!retrievedData)
      throw new Error("No Issues has been found with the sent ID");

    return retrievedData;
  },

  post: (issue: IssuePayload) => {
    return issue;
  },

  put: (issueId: number, issue: IssuePayload) => {
    if (!issueId) throw new Error("The ID is required for this request");
    const retrievedData = data.find(({ id }) => id === issueId);

    if (!retrievedData)
      throw new Error("No Issues has been found with the sent ID");

    return issue;
  },
};
