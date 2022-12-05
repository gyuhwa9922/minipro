import { Button, Form, Input } from "antd";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");
  const imageInput = useRef();
  const ImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const dispatch = useDispatch();
  const ChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    //글 작성시 비워주기
    setText("");
  }, []);
  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={ChangeText}
        maxLength={140}
        placeholder="글작성해봐요"
      />
      <div>
        <input type={"file"} multiple hidden ref={imageInput} />
        <Button onClick={ImageUpload}>이미지 올리기</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          작성
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>사진 업로드 취소</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
