import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DataType } from "../types";

interface TableInterface {
  data: DataType[];
  deleteFunction(id: number): Promise<void>;
}

const IssuesTable = ({ data, deleteFunction }: TableInterface) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button danger onClick={() => deleteFunction(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default IssuesTable;
