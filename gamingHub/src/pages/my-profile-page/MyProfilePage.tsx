import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectUser } from "../../store/authSlice";

export const MyProfilePage: React.FC = () => {
  // const user = useSelector((state: RootState) => state.user);
  const user = useSelector(selectUser);
  console.log(user, "chuj");
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, [state]);
  // if (user) {
  //   return (
  //     <div>
  //       <p>Name: {user.name} </p>
  //       <p>Email: {user.email} </p>
  //     </div>
  //   );
  // }
  // return <div> Loading... </div>;

  return <div>chuj</div>;
};
