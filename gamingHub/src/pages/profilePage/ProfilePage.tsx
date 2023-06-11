import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FriendListWidget,
  MyPostWidget,
  Navbar,
  PostsWidget,
  UserWidget,
} from "../../components";
import { GhDataApi } from "../../utils/axiosConfig";
import { User, getUserEndpoint } from "../../utils";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/authSlice";

export const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [checkingUser, setCheckingUser] = useState<User | null>(
    useSelector(selectUser)
  );

  const { userId } = useParams();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUser = async () => {
    GhDataApi.get(getUserEndpoint(userId as string)).then((response) =>
      setUser(response.data)
    );
  };

  // const getUser = async () => {
  //   console.log(user);
  //   const response = await fetch(
  //     `https://gaminghub-backend.onrender.com/api/user/${userId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: `Bearer ${(checkingUser as User).resetToken}`,
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setUser(data);
  // };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget
            userId={userId as string}
            picturePath={user.userPicturePath}
          />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.userPicturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId as string} isProfile />
        </Box>
      </Box>
    </Box>
  );
};
