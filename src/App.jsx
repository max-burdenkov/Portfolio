import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { HeaderApp } from "./components/layout/Header/HeaderApp";
import { SiderApp } from "./components/layout/Sider/SiderApp";
import ProjectsPage from "./components/pages/ProjectsPage";
import ToDoListPage from "./components/pages/Projects/ToDoListPage";
import MiniStorePage from "./components/pages/Projects/MiniStorePage";
import CommentsPage from "./components/pages/Projects/CommentsPage";
import CurrencyConverterPage from "./components/pages/Projects/CurrencyConverterPage";
import "./App.scss";
import HomePage from "./components/pages/HomePage";
import UserRegistrationForm from "./components/pages/Projects/UserRegistrationForm";
import TicTacToe from "./components/pages/Projects/TicTacToe";
import AboutMePage from "./components/pages/AboutMePage";
import ErrorPage from "./components/pages/ErrorPage";

const layoutContentStyles = {
  padding: "20px",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #1f2b36, #2d3b50)",
};

function App() {
  return (
    <Router>
      <Layout>
        <HeaderApp />
        <Layout>
          <SiderApp />
          <Layout.Content style={layoutContentStyles}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/todolist" element={<ToDoListPage />} />
              <Route path="/projects/ministore" element={<MiniStorePage />} />
              <Route path="/projects/comments" element={<CommentsPage />} />
              <Route
                path="/projects/currencyconverter"
                element={<CurrencyConverterPage />}
              />
              <Route
                path="/projects/userregistrationform"
                element={<UserRegistrationForm />}
              />
              <Route path="/projects/tictactoe" element={<TicTacToe />} />
              <Route path="/about" element={<AboutMePage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout.Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
