import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import useinput from "../hooks/useinput";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user?.id);
  const [commentText, modicomment] = useinput("");
  const submitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={submitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={modicomment} row={4} />
        <Button type="primary" htmlType="submit">
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
