import React from "react";
import { useEffect } from "react";
import {
  FriendListWidget,
  MyPostWidget,
  Navbar,
  PostsWidget,
  UserWidget,
} from "../../components";

import { Box, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { User } from "../../utils";
import { getAllPosts } from "../../store/postSlice";

export const LandingPage: React.FC = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const { _id, userPicturePath } = user as User;

  return (
    <>
      <Navbar />;
      <Box>
        <Box
          width="100%"
          padding="2rem 6%"
          display={isNonMobileScreens ? "flex" : "block"}
          gap="0.5rem"
          justifyContent="space-between"
        >
          <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={_id} picturePath={userPicturePath} />
          </Box>
          <Box
            flexBasis={isNonMobileScreens ? "42%" : undefined}
            mt={isNonMobileScreens ? undefined : "2rem"}
          >
            <MyPostWidget picturePath={userPicturePath} />
            <PostsWidget userId={_id} />
          </Box>
          {isNonMobileScreens && (
            <Box flexBasis="26%">
              <Box m="2rem 0" />
              <FriendListWidget userId={_id} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
