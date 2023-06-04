import { Box, Typography, useTheme } from "@mui/material";
import { FriendWidget } from "./FriendWidget";
import { WidgetWrapper } from "../WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addFriends } from "state";
import { RootState } from "../../store/store";

type FriendListWidgetProps = {
  userId: string;
};

export const FriendListWidget: React.FC<FriendListWidgetProps> = ({
  userId,
}) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state: RootState) => state.user?.resetToken);
  const friends = useSelector((state: RootState) => state.user?.friends);

  const getFriends = async () => {
    // const response = await fetch(
    //   `http://localhost:3001/users/${userId}/friends`,
    //   {
    //     method: "GET",
    //     headers: { Authorization: `Bearer ${token}` },
    //   }
    // );
    // const data = await response.json();
    // dispatch(addFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color="black"
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends &&
          friends.map((friend) => (
            <FriendWidget
              key={friend._id}
              friendId={friend._id}
              name={friend.name}
              userPicturePath={friend.userPicturePath}
            />
          ))}
      </Box>
    </WidgetWrapper>
  );
};
