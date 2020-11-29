import { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Button } from "antd";
import {
  OrderedListOutlined,
  RadarChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useLocation, useHistory } from "react-router-dom";
import Login from "./Login";
import ReportList from "./ReportList";
import UsersTable from "./UsersTable";
import BoarMap from "./BoarMap";
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

const App = () => {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" exact component={ReportList} />
      <ProtectedRoute path="/map" exact component={BoarMap} />
      <ProtectedRoute path="/users" exact component={UsersTable} />
    </Router>
  );
};

export default App;
