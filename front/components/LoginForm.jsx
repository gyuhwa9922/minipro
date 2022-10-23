import React, { useCallback, useState } from "react";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  // const [passwordCheck, setpasswordCheck] = useState("");

  const ChangeId = useCallback((e) => {
    setid(e.target.value);
  }, []);

  const ChangePassword = useCallback((e) => {
    setpassword(e.target.value);
  }, []);
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);
  return (
    <Form onFinish={onSubmitForm}>
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
          type={password}
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
    </Form>
  );
};

export default LoginForm;
