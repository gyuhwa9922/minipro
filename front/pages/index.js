import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POST_REQUEST } from "../reducers/post";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      // console.log(
      //   window.scrollY,
      //   document.documentElement.clientHeight,
      //   document.documentElement.scrollHeight
      // );
      console.log(
        window.scrollY + document.documentElement.clientHeight ===
          document.documentElement.scrollHeight - 300
      );
      console.log(
        window.scrollY + document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
      if (
        Math.floor(window.scrollY + document.documentElement.clientHeight) ==
        Math.floor(document.documentElement.scrollHeight)
      ) {
        console.log("범위 안이야");
        if (hasMorePost) {
          dispatch({
            type: LOAD_POST_REQUEST,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePost, loadPostLoading]);

  return (
    <AppLayout>
      {user && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};
export default Home;
