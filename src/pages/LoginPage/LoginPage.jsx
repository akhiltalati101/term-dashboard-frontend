import React, { useState } from "react";
import { Form, Input, Button, Card } from "antd";
import { LockFilled, UserOutlined } from "@ant-design/icons";
import "./LoginPage.css";

const axios = require('axios');

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
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [pageState, setPageState] = useState("sign");

  const onFinish = (values) => {
    console.log("Success:", values);
    if (pageState === "sign") {
      var formValues = new FormData();
      formValues.append("username", values.email);
      formValues.append("password", values.password);
      axios({
        method: "post",
        url: "/user/signup/",
        data: formValues,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log("Error ", response);
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="LoginRoot">
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
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
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
    </div>
  );
};

export default LoginPage;
