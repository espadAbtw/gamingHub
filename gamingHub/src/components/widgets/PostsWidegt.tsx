import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostWidget } from "./PostWidget";
import { AppDispatch, RootState } from "../../store/store";
import { getAllPosts, selectPosts } from "../../store/postSlice";

type PostsWidgetProps = {
  userId: string;
  isProfile: boolean;
};

export const PostsWidget: React.FC<PostsWidgetProps> = ({
  userId,
  isProfile = false,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  // const getUserPosts = async () => {
  //   const response = await fetch(
  //     `http://localhost:3001/posts/${userId}/posts`,
  //     {
  //       method: "GET",
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setPosts({ posts: data }));
  // };

  useEffect(() => {
    if (isProfile) {
      // getUserPosts();
    } else {
      //   getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userID,
          userName,
          content,
          imagePath,
          userPicturePath,
          likes,
          category,
        }) => (
          <PostWidget
            _id={_id}
            userID={userID}
            name={userName}
            content={content}
            imagePath={imagePath}
            userimagePath={userPicturePath}
            likes={likes}
            category={category}
          />
        )
      )}
    </>
  );
};
