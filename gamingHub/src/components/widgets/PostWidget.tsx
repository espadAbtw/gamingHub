import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Input, Typography } from "@mui/material";
import { FlexBetween } from "./FlexBetween";
import { FriendWidget } from "./FriendWidget";
import { WidgetWrapper } from "./WidgetWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUserId, setToken } from "../../store/authSlice";
import { GhDataApi } from "../../utils/axiosConfig";
import {
  User,
  addLikeEndpoint,
  getCommentsEndpoint,
  getUserEndpoint,
} from "../../utils";
import { setPost } from "../../store/postSlice";
import { blue } from "@mui/material/colors";
import { Likes } from "../../utils/types/post";
import { Comment } from "../../utils/types/comment";

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
  const [friendData, setFriendData] = useState<User>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isComments, setIsComments] = useState(false);
  const loggedInUserId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const likeCount = Object.keys(likes).length;
  const isLiked =
    likes && loggedInUserId ? Boolean(likes[loggedInUserId]) : false;

  const getFriendData = async (): Promise<void> => {
    dispatch(setToken());
    try {
      const response = await GhDataApi.get(getUserEndpoint(userID));
      const data = response.data;
      setFriendData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async (): Promise<void> => {
    try {
      const response = await GhDataApi.get(getCommentsEndpoint(_id));
      const commentsData = response.data;
      setComments(commentsData);
    } catch (error) {
      console.log(error);
    }
  };

  const patchLike = async (): Promise<void> => {
    const values = {
      userId: loggedInUserId,
    };
    try {
      const response = await GhDataApi.patch(addLikeEndpoint(_id), values);
      dispatch(setPost({ post: response.data }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
    getFriendData();
  }, []);

  return (
    <WidgetWrapper
      m="2rem 0"
      sx={{ backgroundColor: "#f3f2f2", color: "#161616" }}
    >
      {
        <FriendWidget
          friendId={friendData?._id}
          name={friendData?.name}
          userPicturePath={friendData?.userPicturePath}
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
          src={imagePath}
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
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>
      </FlexBetween>
      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment: Comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              {/* <UserImage image={comment.userID} size="10px" /> */}
              <Typography sx={{ color: blue, m: "0.5rem 0", pl: "1rem" }}>
                {comment.userName} : {comment.content}
              </Typography>
            </Box>
          ))}
          <Divider />
          <Input />
        </Box>
      )}
    </WidgetWrapper>
  );
};
