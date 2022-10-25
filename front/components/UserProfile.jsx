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
          dsd
          <br />
        </div>,
        <div key={"followings"}>
          dsd
          <br />
        </div>,
        <div key={"followings"}>
          asd
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
