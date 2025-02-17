import React from "react";
import "./HomePage.scss";
import { Button } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page fade-in">
      <div className="home-content">
        <h1 className="greeting">Hello, let's get to know each other!</h1>
        <p className="intro-text-home">
          I'm Max, a passionate Frontend Developer, with a focus on creating
          beautiful and functional websites. Let's build something amazing
          together!
        </p>
        <Link to="/projects">
          <Button className="mobile-btn" type="primary">
            Projects
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
