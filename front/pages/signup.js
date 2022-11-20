import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { Form, Input } from "antd";
import Password from "antd/lib/input/Password";

const signup = () => {
  const [id, setId] = useState(``);
  const [password, setpassword] = useState(``);
  const [passwordCheck, setpasswordCheck] = useState(``);
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setpassword(e.target.value);
  }, []);
  const onChangePasswordCheck = useCallback((e) => {
    setpasswordCheck(e.target.value);
  }, []);

  return (
    <AppLayout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br />
          <Input
            name="user-nickname"
            value={Nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            value={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input
            name="user-password-check"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
        </div>
      </Form>
    </AppLayout>
  );
};

export default signup;
