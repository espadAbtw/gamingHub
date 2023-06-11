import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostWidget } from "./PostWidget";
import { AppDispatch } from "../../store/store";
import { getAllPosts, selectPosts } from "../../store/postSlice";

type PostsWidgetProps = {
  userId: string;
  isProfile?: boolean;
};

export const PostsWidget: React.FC<PostsWidgetProps> = ({
  userId,
  isProfile = true,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector(selectPosts);
  console.log(userId, isProfile);
  console.log("to sa posty: ", posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const filteredPosts = userId
    ? posts.filter((post) => post.userID === userId)
    : posts;

  return (
    <>
      {filteredPosts.map(
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
            key={_id}
            _id={_id}
            userID={userID as string}
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
