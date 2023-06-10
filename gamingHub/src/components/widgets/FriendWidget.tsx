import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addFriend } from "../../store/authSlice";
import { FlexBetween } from "../FlexBetween";
import { RootState } from "../../store/store";
import { Friend } from "../../utils";
import { UserImage } from "../UserImage";

type FriendProps = {
  friendId?: string;
  name?: string;
  userPicturePath?: string;
};

export const FriendWidget: React.FC<FriendProps> = ({
  friendId,
  name,
  userPicturePath,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const friends = useSelector((state: RootState) => state.user?.friends);
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;

  const isFriend = friends?.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    // const response = await fetch(
    //   `http://localhost:3001/users/${_id}/${friendId}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // const data = await response.json();
    // dispatch(addFriend({ friends: data }));
  };
  if (!name) {
    name = "user";
  }

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color="#161616"
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};
