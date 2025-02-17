import { useState } from "react";
import { Layout, Modal } from "antd";
import {
  InstagramOutlined,
  GithubOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./HeaderApp.scss";
import logo from "../../../assets/logo__icon.svg";

const styleHeader = {
  textAlign: "center",
  height: 60,
  lineHeight: "60px",
  backgroundColor: "#FFEBEE",
};

const modalTitleStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#524040",
  transition: "color 0.3s ease",
};

export const HeaderApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalIcon, setModalIcon] = useState(null);

  const showModal = (title, link, icon) => {
    setModalTitle(title);
    setModalContent(link);
    setModalIcon(icon);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout.Header className="header fade-in" style={styleHeader}>
      <div className="Header__container">
        <div className="Logo__container">
          <img width={40} src={logo} alt="" />
          <h1>
            <a  href="/">BM</a>
          </h1>
        </div>
        <ul className="Contact__items">
          <li>
            <a
              href="#"
              onClick={() =>
                showModal(
                  "Instagram",
                  "https://instagram.com/mas9official",
                  <InstagramOutlined />
                )
              }
            >
              Insta
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                showModal(
                  "GitHub",
                  "https://github.com/max-burdenkov",
                  <GithubOutlined />
                )
              }
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() =>
                showModal(
                  "Gmail",
                  "mailto:mburdenkov@gmail.com",
                  <MailOutlined />
                )
              }
            >
              Gmail
            </a>
          </li>
        </ul>
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null}>
        <div style={{ textAlign: "center" }}>
          <div
            style={modalTitleStyles}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#181515")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#524040")}
          >
            {modalIcon} {modalTitle}
          </div>
          <p style={{ marginTop: "10px" }}>
            <a
              href={modalContent}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#524040", transition: "color 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#181515")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#524040")}
            >
              {modalContent}
            </a>
          </p>
        </div>
      </Modal>
    </Layout.Header>
  );
};
