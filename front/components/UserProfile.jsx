import { Avatar, Button, Card } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const UserProfile = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logoutAction());
  };
  return (
    <Card
      actions={[
        <div key={"write"}>
          회원정보 보기
          <br />
        </div>,
        <div key={"followings"}>
          팔로워
          <br />
        </div>,
        <div key={"followings"}>
          팔로잉
          <br />
        </div>,
      ]}
    >
      <Card.Meta title="lgh" avatar={<Avatar>img</Avatar>} />
      <Button onClick={LogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
