import AppLayout from "./AppLayout";
import { Table, Button, PageHeader } from "antd";

const ReportList = () => {
  return (
    <AppLayout>
      <PageHeader title="Lista zgłoszeń" />
      <Table dataSource={dataSource} columns={columns} />
    </AppLayout>
  );
};

export default ReportList;

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Rozmiar",
    key: "boarAge",
    render: (item) => {
      return item.boarAge ? `${item.boarAge}` : "-";
    },
  },
  {
    title: "Stan",
    key: "dead",
    render: (item) => {
      return item.dead === true ? "Żywy" : "Truchło";
    },
  },
  {
    title: "Koordynaty",
    key: "coords",
    render: (item) => `${item.latitude}` + "," + `${item.longitude}`,
  },
  {
    title: "Status zgłoszenia",
    key: "status",
    render: (item) => {
      if (item.status === "canceled") {
        return "Anulowane";
      } else if (item.status === "pending") {
        return "Przetwarzane";
      } else return "Zaakceptowane";
    },
  },
  {
    title: "Liczebność",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Nazwa miejsca",
    dataIndex: "placeName",
    key: "placeName",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: (item) => {
      return (
        <div style={{ display: "flex" }}>
          <Button
            type="danger"
            onClick={() => console.log(item)}
            style={{ marginRight: "5px" }}
          >
            ODRZUĆ
          </Button>
          <Button type="primary" onClick={() => console.log(item)}>
            AKCEPTUJ
          </Button>
        </div>
      );
    },
  },
];

const dataSource = [
  {
    key: "1",
    id: "1",
    boarAge: "mały",
    dead: false,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "21",
    status: "canceled",
    quantity: 1,
    placeName: "10 Downing Street",
  },
  {
    key: "2",
    id: "2",
    boarAge: "średni",
    dead: true,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "22",
    status: "success",
    quantity: 1,
    placeName: "Krawowska 12 Kraków",
  },
  {
    key: "3",
    id: "3",
    boarAge: "duży",
    dead: false,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "43",
    status: "pending",
    quantity: 4,
    placeName: "Kraków park Jordana",
  },
  {
    key: "4",
    id: "4",
    boarAge: "średni",
    dead: false,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "24",
    status: "rejected",
    quantity: 5,
    placeName: "Kraków, Plac Centralny",
  },
  {
    key: "5",
    id: "5",
    boarAge: "średni",
    dead: true,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "35",
    status: "rejected",
    quantity: 1,
    placeName: "Nowy Sącz, Rynek",
  },
  {
    key: "6",
    id: "6",
    boarAge: "średni",
    dead: false,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "16",
    status: "pending",
    quantity: 1,
    placeName: "Nowy Sącz, planty",
  },
  {
    key: "7",
    id: "7",
    boarAge: "średni",
    dead: false,
    latitude: 51.000947,
    longitude: 51.000947,
    uId: "71",
    status: "pending",
    quantity: 1,
    placeName: "Kraków, park Krowoderski",
  },
];
