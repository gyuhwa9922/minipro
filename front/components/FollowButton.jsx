import React, { useCallback } from "react";
import { Button } from "antd";
import { PropTypes } from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const FollowButton = ({ post }) => {
  const { user } = useSelector((state) => state.user);
  const isFollowing = user && user.Follwing.find((v) => v.id === post.User.id);
  const onFollow = useCallback(() => {
    if (isFollowing) {
      dispatch;
    }
  });
  return <Button>팔로우</Button>;
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
