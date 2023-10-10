interface payloadInterface {
  id?: number;
  title: string;
  description: string;
}

const apiUrl = 'http://localhost:3001'

export const api = {
  fetchIssues: async () => {
    const response = await fetch(`${apiUrl}/issues/`);
    const issues = await response.json();
    return issues;
  },
  deleteIssue: async (id: number) => {
    const requestCall = await fetch(`${apiUrl}/issues/${id}`, {
      method: "DELETE",
    });
    const response = await requestCall.json();
    return response;
  },
  addIssue: async (payload: payloadInterface) => {
    const requestCall = await fetch(`${apiUrl}/issues`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(payload),
    });
    const response = await requestCall.json();
    return response;
  },
};
