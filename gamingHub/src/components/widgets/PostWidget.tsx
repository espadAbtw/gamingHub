import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "../FlexBetween";
import { FriendWidget } from "./FriendWidget";
import { WidgetWrapper } from "../WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Post } from "../../utils/types/post";
import { selectLoggedInUserId } from "../../store/authSlice";

type PostProps = {
  _id: string;
  userID: string;
  name?: string;
  content?: string;
  imagePath?: string;
  userimagePath?: string;
  category?: string;
  likes?: String[];
};

export const PostWidget: React.FC<PostProps> = ({
  _id,
  userID,
  name,
  content,
  imagePath,
  userimagePath,
  likes,
}) => {
  const [isComments, setIsComments] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const loggedInUserId = useSelector(selectLoggedInUserId);

  let isLiked = false;
  if (loggedInUserId) {
    isLiked = likes.includes(loggedInUserId);
  } else {
    isLiked = false;
  }

  const likeCount = Object.keys(likes).length;

  const { palette } = useTheme();
  const main = "white";
  const primary = palette.primary.main;

  const patchLike = async () => {
    // const response = await fetch(`http://localhost:3001/posts/${_id}/like`, {
    //   method: "PATCH",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userId: loggedInUserId }),
    // });
    // const updatedPost = await response.json();
    // dispatch(setPost({ post: updatedPost }));
  };

  return (
    <WidgetWrapper m="2rem 0">
      {/* <FriendWidget
        friendId={userID}
        name={name}
        userPicturePath={userimagePath}
      /> */}
      <Typography color={main} sx={{ mt: "1rem" }}>
        {content}
      </Typography>
      {imagePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`http://localhost:3001/assets/${imagePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            {/* <Typography>{comments.length}</Typography> */}
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>
      {/* {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )} */}
    </WidgetWrapper>
  );
};