import React from "react";
import Link from "next/link";
import { PropTypes } from "prop-types";

const PostCardContent = ({ postData }) => {
  console.log(postData);
  return (
    <div>
      {postData.split(/(#[^\s#]+)/g).map((v, index) => {
        if (v.match(/(#[^\s#]+)/)) {
          return (
            <Link href={`/hashtag/${v.slice(1)}`} key={index}>
              <a>{v}</a>
            </Link>
          );
        }
        return v;
      })}
    </div>
  );
};

PostCardContent.propsTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
