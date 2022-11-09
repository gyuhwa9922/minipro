import React from "react";
import AppLayout from "../components/AppLayout";

const profile = () => {
  const followerList = [
    { nickname: "gyuhwa" },
    { nickname: "lgh" },
    { nickname: "gyudori" },
  ];
  const followingList = [
    { nickname: "gyuhwa" },
    { nickname: "lgh" },
    { nickname: "gyudori" },
  ];
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header="following list" data={followerList} />
      <FollowList header="follower list" data={followingList} />
    </AppLayout>
  );
};

export default profile;
