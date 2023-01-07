import React, { useCallback, useState } from "react";
import AppLayout from "../components/AppLayout";
import { Button, Checkbox, Form, Input } from "antd";
import useinput from "../hooks/useinput";
import { SIGN_UP_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const signup = () => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector((state) => state.user);
  // 아이디
  const [id, onChangeId] = useinput("");
  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);
  //이메일
  const [email, onChangeEmail] = useinput("");
  // 비밀번호
  const [password, onChangePassword] = useinput("");
  // const [password, setpassword] = useState("");
  // const onChangePassword = useCallback((e) => {
  //   setpassword(e.target.value);
  // }, []);
  // 닉네임
  const [Nickname, onChangeNickname] = useinput("");
  // const [Nickname, setNickname] = useState("");
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);
  // 비밀번호 에러 && 비밀번호 체크
  const [passwordError, setpasswordError] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState("");
  const onChangePasswordCheck = useCallback(
    (e) => {
      setpasswordCheck(e.target.value);
      setpasswordError(e.target.value !== password);
    },
    [password]
  );
  //약관동의
  const [term, setterm] = useState("");
  const [termError, settermError] = useState(true);
  const ChangeTerm = useCallback((e) => {
    setterm(e.target.checked);
    settermError(false);
  }, []);
  // 가입 완료시 실행되는 코드
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      // console.log("flag1");
      return setpasswordError(true);
    }
    if (!term) {
      // console.log("flag2");
      // console.log(termError);
      return settermError(true);
    }
    console.log(id);
    console.log(Nickname);
    console.log(email);
    console.log(password);
    console.log(term);
    console.log("flag3");
    dispatchEvent({
      type: SIGN_UP_REQUEST,
      data: { email, id, password, Nickname },
    });
  }, [email, password, passwordCheck, term]);

  return (
    <AppLayout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input
            name="user-email"
            value={email}
            type="email"
            required
            onChange={onChangeEmail}
          />
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
            type={"password"}
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
            type={"password"}
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
            {termError && (
              <div style={{ color: "red" }}>약관에 동의하셔야 합니다</div>
            )}
          </Checkbox>
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            가입하기
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default signup;
