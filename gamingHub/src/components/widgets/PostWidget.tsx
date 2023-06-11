import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { FlexBetween } from "./FlexBetween";
import { FriendWidget } from "./FriendWidget";
import { WidgetWrapper } from "./WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUserId, setToken } from "../../store/authSlice";
import { GhDataApi } from "../../utils/axiosConfig";
import { addLikeEndpoint } from "../../utils";
import { setPost } from "../../store/postSlice";
import { blue } from "@mui/material/colors";
import { Likes } from "../../utils/types/post";

type PostProps = {
  _id: string;
  userID: string;
  name: string;
  content: string;
  imagePath: string;
  userimagePath: string;
  category?: string;
  likes: Likes;
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
  const loggedInUserId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const likeCount = Object.keys(likes).length;
  const isLiked =
    likes && loggedInUserId ? Boolean(likes[loggedInUserId]) : false;

  const patchLike = async (): Promise<void> => {
    const values = {
      userId: loggedInUserId,
    };
    await GhDataApi.put(addLikeEndpoint(_id), values)
      .then((response) => {
        console.log("Like dodany");
        dispatch(setPost({ post: response.data }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <WidgetWrapper
      m="2rem 0"
      sx={{ backgroundColor: "#f3f2f2", color: "#161616" }}
    >
      {
        <FriendWidget
          friendId={userID}
          name={name}
          userPicturePath={userimagePath}
        />
      }
      <Typography color={"#161616"} sx={{ mt: "1rem" }}>
        {content}
      </Typography>
      {imagePath && (
        <img
          width="100%"
          height="auto"
          alt="#161616"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={`../assets/${imagePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: blue }} />
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
