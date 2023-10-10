import { useState } from "react";
import "./App.css";
import IssuesTable from "./components/IssuesTable";
import { Button } from "antd";
import { api } from "./api";
import { DataType } from "./types";

function App() {
  const [issues, setIssues] = useState<DataType[]>([]);

  const loadAllIssues = async () => {
    const issues = await api.fetchIssues()
    setIssues(issues.data)
  };

  const deleteIssue = async (deletedId: number): Promise<void> => {
    const { data } = await api.deleteIssue(deletedId)

    const currentDeletedId = data?.id ?? deletedId

    const newIssues = [...issues].filter(({id}) => id !== currentDeletedId)
    setIssues(newIssues)

  };

  const addIssues = async (): Promise<void> => {


    const randomId = Math.floor(Math.random() * 100);

    const randomIssue = await api.addIssue({
      id: randomId,
      title: `Random Issue ${randomId}`,
      description: `Random Issue ${randomId}`
    })

    setIssues([...issues, randomIssue.data])

  };

  return (
    <>
      <h1>Sitemate Issues</h1>
      <div className="card">
        <Button onClick={addIssues} type="primary">Add</Button>
        <Button onClick={loadAllIssues}>Load Issues</Button>
      </div>
      <IssuesTable data={issues} deleteFunction={deleteIssue} />
    </>
  );
}

export default App;
