import { Html5Outlined, CodeOutlined, GithubOutlined, AppstoreOutlined, BranchesOutlined, LayoutOutlined } from "@ant-design/icons";
import "./AboutMePage.scss";
import { Card } from "antd";

const AboutMePage = () => {
  return (
    <div className="about-me fade-in">
      <Card title="About Me" className="about-card">
        <p className="intro-text-about">If after viewing the projects you have forgotten my name and who I am, I will remind you - my name is Max and I am a Frontend Developer</p>
        <p className="skills-intro">My skills include:</p>
        <div className="skills-list">
          <div className="skill-item">
            <Html5Outlined />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <CodeOutlined />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <CodeOutlined />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <AppstoreOutlined />
            <p>React</p>
          </div>
          <div className="skill-item">
            <LayoutOutlined />
            <p>Adaptive Layout</p>
          </div>
          <div className="skill-item">
            <BranchesOutlined />
            <p>GitHub</p>
          </div>
          <div className="skill-item">
            <CodeOutlined />
            <p>Sass</p>
          </div>
          <div className="skill-item">
            <AppstoreOutlined />
            <p>SPA (Single Page Applications)</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AboutMePage;