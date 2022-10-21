import { Avatar, Card } from "antd";
import React from "react";

const UserProfile = () => {
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
    </Card>
  );
};

export default UserProfile;
