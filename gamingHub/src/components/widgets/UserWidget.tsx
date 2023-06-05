import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import {
  Box,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { UserImage } from "../UserImage";
import { FlexBetween } from "../FlexBetween";
import { WidgetWrapper } from "../WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { User } from "../../utils";

type UserWidgetProps = {
  userId: string;
  picturePath: string;
};

export const UserWidget: React.FC<UserWidgetProps> = ({
  userId,
  picturePath,
}) => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const main = "black";
  const user = useSelector((state: RootState) => state.auth.user);
  // const getUser = async () => {
  //   const response = await fetch(`http://localhost:3001/users/${userId}`, {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const data = await response.json();
  //   setUser(data);
  // };

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) {
    return null;
  }

  const { name, friends } = user;

  return (
    <WidgetWrapper
      margin={isNonMobileScreens ? "0 10px 0 40px" : "0"}
      sx={{
        backgroundColor: "#f3f2f2",
        color: "#161616",
      }}
    >
      {/* FIRST ROW */}
      <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} size="60px" />
          <Box>
            <Typography
              variant="h4"
              color="#161616"
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
            <Typography color="#161616">{friends.length} friends</Typography>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}

      {/* FOURTH ROW */}
      <Box p="1rem 0">
        <Typography fontSize="1rem" color="#161616" fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color="#161616" fontWeight="500">
                Twitter
              </Typography>
              <Typography color="#6386c5">Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: "#161616" }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color="#6386c5">Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};
