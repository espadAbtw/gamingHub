import { Box, Typography, useMediaQuery } from "@mui/material";
import { FriendWidget } from "./FriendWidget";
import { WidgetWrapper } from "./WidgetWrapper";

import { useSelector } from "react-redux";
// import { addFriends } from "state";

import { selectUser } from "../../store/authSlice";

type FriendListWidgetProps = {
  userId: string;
};

export const FriendListWidget: React.FC<FriendListWidgetProps> = ({
  userId,
}) => {
  //const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector(selectUser);
  const friends = user?.friends;

  return (
    <WidgetWrapper
      margin={isNonMobileScreens ? "0 40px 0 10px" : "0"}
      sx={{
        backgroundColor: "#f3f2f2",
        color: "#161616",
      }}
    >
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
