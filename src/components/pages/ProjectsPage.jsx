import React from "react";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import "./ProjectsPage.scss";

const { Meta } = Card;

const projects = [
  {
    title: "To-do List",
    description: "Знаю, що всі роблять Todo, тому також не втримався :)",
    link: "/projects/todolist",
  },
  {
    title: "Mini Store",
    description:
      "Взагалі нічого немає спільного із справжніми інтернет магазинами,але як для інтерактивності, чому б і ні?",
    link: "/projects/ministore",
  },
  {
    title: "Comments",
    description:
      "Проста реалізація коментарів зі збереженням за допомогою LocalStorage, нічого дивовижного",
    link: "/projects/comments",
  },
  {
    title: "Currency Converter",
    description: "Мінімалістичний, лаконічний конвертер валют",
    link: "/projects/currencyconverter",
  },
  {
    title: "User Registration Form",
    description:
      "Звичайний приклад реєстраційної форми, із валідацією та збереженням даних в localStorage",
    link: "/projects/userregistrationform",
  },
  {
    title: "Tic Tac Toe",
    description: `Класична гра під назвою "Хрестики-нулики, що прийшла до нас із стародавнього Єгипту"`,
    link: "/projects/tictactoe",
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page fade-in">
      <h1 style={{ color: "#FFEBEE" }}>Projects</h1>
      <Row gutter={[16, 16]}>
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={12} lg={8} span={8} key={index}>
            <Link to={project.link}>
              <Card hoverable>
                <Meta title={project.title} description={project.description} />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      <Link to="/about">
        <Button style={{marginTop: '1rem'}} className="mobile-btn" type="primary">
          About Me
        </Button>
      </Link>
    </div>
  );
};

export default ProjectsPage;
