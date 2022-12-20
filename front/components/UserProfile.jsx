import { Avatar, Button, Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, isLoggingOut } = useSelector((state) => state.user);
  const LogOut = () => {
    dispatch(logoutRequestAction());
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
      <Card.Meta
        title={user.nickname}
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
      />
      <Button onClick={LogOut} loading={isLoggingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
