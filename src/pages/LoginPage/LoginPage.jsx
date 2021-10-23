import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { LockFilled, UserOutlined } from "@ant-design/icons";
import "./LoginPage.css";
import { LogOutHelper } from "./LogOutHelper";

const axios = require("axios");

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
  const token = sessionStorage.getItem("jwt-token");
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    var formValues = new FormData();
    if (pageState === "sign") {
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
          // save your token in the localStorage
          //also you should set your user into the store using the setStore function
          sessionStorage.setItem("jwt-token", response.data.access_token);
          navigate('/app/dashboard', { replace: true });
        })
        .catch(function (response) {
          //handle error
          console.log("Error ", response);
        });
    } else if( pageState === "log"){
      formValues.append("username", values.email);
      formValues.append("password", values.password);
      axios({
        method: "post",
        url: "/user/login/",
        data: formValues,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          // save your token in the localStorage
          //also you should set your user into the store using the setStore function
          sessionStorage.setItem("jwt-token", response.data.access_token);
          console.log("Session storage: ", sessionStorage)
          navigate('/app/dashboard', { replace: true });
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
  const SignupForm =
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
const ProceedForm =
<div className="Login">
  <Card bordered={false} className="card">
    <div className="h2">You are already logged in.</div>
      <>
        <Button
          type="primary"
          className="submit-button"
          shape="round"
          htmlType="submit"
          onClick={() => {
            navigate('/app/dashboard', { replace: true });
          }}
        >
          Proceed
        </Button>
      </>
      <>
        <div className="h4">
          Want to logout?
          <Button
            size={"small"}
            type="link"
            className="sign-up-button"
            onClick={() => {
              console.log("Login page: Logout clicked");
              LogOutHelper()
            }}
          >
            Click Here
          </Button>
        </div>
      </>
  </Card>
</div>
  return (
    <div className="LoginRoot">
      {(token && token!=="" && token!== undefined)? ProceedForm: SignupForm}
    </div>
  );
};

export default LoginPage;
