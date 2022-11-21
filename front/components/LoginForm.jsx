import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import useinput from "../hooks/useinput";
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const Login = styled(Form)`
  margin-top: 10px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, ChangeId] = useinput("");
  // const [passwordCheck, setpasswordCheck] = useState("");

  // const [id, setid] = useState("");
  // const ChangeId = useCallback((e) => {
  //   setid(e.target.value);
  // }, []);
  const [password, ChangePassword] = useinput("");
  //   const [password, setpassword] = useState("");
  // const ChangePassword = useCallback((e) => {
  //   setpassword(e.target.value);
  // }, []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <Login onFinish={onSubmitForm}>
      <div>
        <label htmlFor="userId">아이디</label>
        <br />
        <Input name="userId" value={id} onchange={ChangeId} required />
      </div>
      <div>
        <label htmlFor="userPassword">비밀번호</label>
        <br />
        <Input
          name="userPassword"
          type={"password"}
          value={password}
          onchange={ChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href={"/signup"}>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Login>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};
export default LoginForm;
