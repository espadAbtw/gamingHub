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

  console.log("Test", userId, isProfile);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

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
            key={_id}
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
