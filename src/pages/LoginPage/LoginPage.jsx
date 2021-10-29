import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Card } from "antd";
import { LockFilled, UserOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import { login, logout } from "../../store/token";

// const axios = require("axios");

const values = {
  log: {
    email: "",
    password: "",
    titleText: "Log In",
    buttonText: "Log In",
    linkText: "Sign Up",
  },
  sign: {
    email: "",
    password: "",
    titleText: "Sign Up",
    buttonText: "Sign Up",
    linkText: "Log In",
  },
};
const LoginPage = () => {
  const [pageState, setPageState] = useState("sign");
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(login({ username: values.email, password: values.password }));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const SignupForm = (
    <div className="Login">
      <Card bordered={false} className="card">
        <div className="h2">{values[pageState].titleText}</div>
        <div className="h3">Enter your details below to continue.</div>
        <Form
          name="basic"
          layout={"vertical"}
          initialValues={values[pageState]}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          size={"large"}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="E-mail Address"
              className="email-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockFilled />}
              placeholder="Password"
              className="password-input"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="submit-button"
              shape="round"
              htmlType="submit"
            >
              {values[pageState].buttonText}
            </Button>
          </Form.Item>
          <>
            <div className="h4">
              Don't have an account?
              <Button
                size={"small"}
                type="link"
                className="sign-up-button"
                onClick={() => {
                  setPageState(pageState === "log" ? "sign" : "log");
                }}
              >
                {values[pageState].linkText}
              </Button>
            </div>
          </>
        </Form>
      </Card>
    </div>
  );
  if (token) {
    return <Navigate to="/app/dashboard" />;
  }
  return <div className="LoginRoot">{SignupForm}</div>;
};

export default LoginPage;
