import { Avatar, Button, Card } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, logOutLoading } = useSelector((state) => state.user);
  const LogOut = () => {
    dispatch(logoutRequestAction());
  };
  return (
    <Card
      actions={[
        <div key={"write"}>
          {user.Posts.length}
          <br />
        </div>,
        <div key={"followings"}>
          팔로잉{user.Followings.length}
          <br />
        </div>,
        <div key={"followings"}>
          팔로워{user.Followers.length}
          <br />
        </div>,
      ]}
    >
      <Card.Meta
        title={user.nickname}
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
      />
      <Button onClick={LogOut} loading={logOutLoading}>
        로그아웃
      </Button>
    </Card>
  );
};

export default UserProfile;
