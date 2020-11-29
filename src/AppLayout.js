import { useState } from "react";
import ReactDOM from "react-dom";
import { useLocation, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Button, PageHeader } from "antd";
import {
  OrderedListOutlined,
  RadarChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { logout } from "./AuthService";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

let routeToKey = (pathname) => {
  switch (pathname) {
    case "/":
      return ["1"];
    case "/map":
      return ["2"];
    case "/users":
      return ["3"];
  }
};

const AppLayout = (props) => {
  let [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const history = useHistory();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          selectedKeys={routeToKey(location.pathname)}
        >
          <Menu.Item key="1" icon={<OrderedListOutlined />}>
            <Link to="/">Zgłoszenia</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<RadarChartOutlined />}>
            <Link to="/map">Mapa</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/users">Użytkownicy</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ background: "#e0e0e0" }}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "20px",
          }}
        >
          <PageHeader
            title="+1 Dziczku"
            style={{
              height: "60px",
              fontWeight: "900",
              height: "71px",
              background: "transparent",
            }}
          />
          <Button
            type="primary"
            onClick={() => {
              logout();
              history.push("/login");
            }}
          >
            WYLOGUJ
          </Button>
        </Header>
        <Content style={{ margin: "20px 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: "100%", background: "#fff" }}
          >
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
