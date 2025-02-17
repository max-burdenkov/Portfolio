import React, { useState, useEffect, useCallback } from "react";
import "./UserRegistrationForm.scss";

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setResponseMessage("");
  }, []);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Необхідно вказати ім'я";
    if (!formData.email.trim()) {
      errors.email = "Необхідно вказати адресу електронної пошти";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Вкажіть правильний формат електроної пошти";
    }
    if (!formData.password) {
      errors.password = "Необхідно ввести пароль";
    } else if (formData.password.length < 6) {
      errors.password = "Пароль має бути не менше 6 символів";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (validateForm()) {
        console.log("Form data:", formData);

        setResponseMessage("Дані успішно надіслані!");

        setFormData({
          name: "",
          email: "",
          password: "",
        });
        setErrors({});
        localStorage.removeItem("formData");
      } else {
        setResponseMessage("Виправте помилки та повторіть спробу.");
      }
    },
    [formData]
  );

  return (
    <div className="contact-form fade-in ">
      <h2 className="contact-form__title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="contact-form__label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="contact-form__input"
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>
        <div>
          <label className="contact-form__label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-form__input"
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label className="contact-form__label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="contact-form__input"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <button type="submit" className="contact-form__button">
          Submit
        </button>
      </form>
      {responseMessage && (
        <div
          style={{
            marginTop: "20px",
            color: responseMessage.includes("success") ? "green" : "red",
          }}
        >
          {responseMessage}
        </div>
      )}
    </div>
  );
};

export default UserRegistrationForm;
