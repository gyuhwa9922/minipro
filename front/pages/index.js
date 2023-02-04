import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POST_REQUEST } from "../reducers/post";
import user from "../reducers/user";

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []);
  useEffect(() => {
    function onScroll() {
      console.log(
        window.scrollY,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight
      );
    }
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (hasMorePost) {
        dispatch({
          type: LOAD_POST_REQUEST,
        });
      }
    }
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePost]);
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
