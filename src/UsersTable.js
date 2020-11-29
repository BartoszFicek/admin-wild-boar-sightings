import AppLayout from "./AppLayout";
import { Table, Button, PageHeader } from "antd";

const UsersList = () => {
  return (
    <AppLayout>
      <PageHeader title="Lista użytkowników" />
      <Table dataSource={dataSource} columns={columns} />
    </AppLayout>
  );
};

export default UsersList;

const dataSource = [
  {
    key: "1",
    name: "Victor",
    surname: "Brown",
    email: "asd+1@gmail.com",
  },
  {
    key: "2",
    name: "Jakub",
    surname: "Nowak",
    email: "Jakub+1@gmail.com",
  },
  {
    key: "3",
    name: "Michał",
    surname: "Zielonka",
    email: "MichalZiel@gmail.com",
  },
  {
    key: "4",
    name: "Krzysztof",
    surname: "Drozd",
    email: "drozdu@gmail.com",
  },
  {
    key: "5",
    name: "Natalia",
    surname: "Wróbel",
    email: "krak1@gmail.com",
  },
  {
    key: "6",
    name: "Weronika",
    surname: "Kasprzyk",
    email: "kaspi@gmail.com",
  },
  {
    key: "7",
    name: "Wiktor",
    surname: "Sao",
    email: "czeh@gmail.com",
  },
  {
    key: "8",
    name: "Olga",
    surname: "Korczak",
    email: "olga122@gmail.com",
  },
];

const columns = [
  {
    title: "Imię",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Nazwisko",
    dataIndex: "surname",
    key: "surname",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (item) => {
      return (
        <Button type="danger" onClick={() => console.log(item)}>
          USUŃ
        </Button>
      );
    },
  },
];
