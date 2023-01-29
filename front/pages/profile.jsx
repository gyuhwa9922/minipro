import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import FollowList from "../components/FollowList";
import NicknameEditForm from "../components/NicknameEditForm";
import Router from "next/router";

 const profile = () => {
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if(!(user $$ user.id)) {
      Router.push('/');
    }
  });

  if (!user) {
    return null;
  }
  // const followerList = [
  //   { nickname: "gyuhwa" },
  //   { nickname: "lgh" },
  //   { nickname: "gyudori" },
  // ];
  // const followingList = [
  //   { nickname: "gyuhwa" },
  //   { nickname: "lgh" },
  //   { nickname: "gyudori" },
  // ];
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="following list" data={user.Followings} />
      <FollowList header="follower list" data={user.Followers} />
    </AppLayout>
  );
};

export default profile;
