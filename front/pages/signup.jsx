import React, { useCallback } from "react";
import AppLayout from "../components/AppLayout";
import { Checkbox, Form, Input } from "antd";
import Password from "antd/lib/input/Password";
import useinput from "../hooks/useinput";

const signup = () => {
  const [id, onChangeId] = useinput("");
  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  const [password, onChangePassword] = useinput("");
  // const [password, setpassword] = useState("");
  // const onChangePassword = useCallback((e) => {
  //   setpassword(e.target.value);
  // }, []);
  const [Nickname, onChangeNickname] = useinput("");
  // const [Nickname, setNickname] = useState("");
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);
  const [passwordError, setpasswordError] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState("");
  const onChangePasswordCheck = useCallback(
    (e) => {
      setpasswordCheck(e.target.value);
      setpasswordError(e.target.value !== password);
    },
    [password]
  );

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
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={ChangeTerm}>
            약관동의 확인
          </Checkbox>
        </div>
      </Form>
    </AppLayout>
  );
};

export default signup;
