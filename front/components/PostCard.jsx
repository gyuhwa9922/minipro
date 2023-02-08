import { Avatar, Button, Card, Comment, List, Popover } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useCallback, useState } from "react";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
  HeartFilled,
} from "@ant-design/icons";
import ButtonGroup from "antd/lib/button/button-group";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const id = useSelector((state) => state.user.user?.id);
  const [isLiked, setIsLiked] = useState(false);
  const HeartChage = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);
  const [commentOpen, setCommentOpen] = useState(false);
  const CommentToggle = useCallback(() => {
    setCommentOpen((prev) => !prev);
  }, []);
  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);
  // console.log(post);
  console.log(post.content);
  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key={"retweet"} />,
          isLiked ? (
            <HeartFilled
              style={{ color: "#eb2f96" }}
              key={"likedOn"}
              onClick={HeartChage}
            />
          ) : (
            <HeartOutlined key={"liked"} onClick={HeartChage} />
          ),
          <MessageOutlined key={"comment"} onClick={CommentToggle} />,
          <Popover
            key={"more"}
            content={
              <ButtonGroup>
                {id && post.User.id === id ? (
                  <>
                    <Button type="primary">수정</Button>
                    <Button
                      type="primary"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                      danger
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button danger>신고</Button>
                )}
              </ButtonGroup>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentOpen && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};
PostCard.propType = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
export default PostCard;
