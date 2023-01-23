import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import useinput from "../hooks/useinput";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    (state) => state.post
  );
  const [commentText, onChangeText, setCommentText] = useinput("");
  const submitComment = useCallback(() => {
    console.log(post.id, commentText);
    //동적action creater
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  useEffect(() => {
    if (addCommentDone) {
      //글 작성시 비워주기
      setCommentText("");
    }
  }, [addCommentDone]);
  return (
    <Form onFinish={submitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeText} row={4} />
        <Button type="primary" htmlType="submit" loading={addCommentLoading}>
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
