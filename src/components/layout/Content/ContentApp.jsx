import React from "react";
import { Routes, Route } from "react-router-dom";
import ProjectsPage from "../../Projects/ProjectsPage"; 
import UserRegistrationForm from "../../Projects/Form/UserRegistrationForm"; 

function ContentApp() {
  return (
    <div style={{ padding: "20px", minHeight: "100vh" }}>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/register" element={<UserRegistrationForm />} />
      </Routes>
    </div>
  );
}

export default ContentApp;