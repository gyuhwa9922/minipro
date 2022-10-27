import { Avatar, Button, Card } from "antd";
import React from "react";

const UserProfile = ({ setIsLoggedIn }) => {
  const LogOut = () => {
    setIsLoggedIn(false);
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
      <Card.Meta title="lgh" avatar={<Avatar>ss</Avatar>} />
      <Button onClick={LogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
