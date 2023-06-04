import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import { PostWidget } from "./PostWidget";
import { RootState } from "../../store/store";

type PostsWidgetProps = {
  userId: string;
  isProfile: boolean;
};

export const PostsWidget: React.FC<PostsWidgetProps> = ({
  userId,
  isProfile = false,
}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RootState) => state.post);
  const token = useSelector((state: RootState) => state.user?.resetToken);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `http://localhost:3001/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await response.json();
    dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({ _id, userID, userName, post, imagePath, category, likes }) => (
          <PostWidget
            _id={_id as string}
            userID={userID}
            name={userName}
            content={description as string}
            imagePath={picturePath as string}
            userimagePath={userPicturePath as string}
            likes={likes}
          />
        )
      )}
    </>
  );
};
