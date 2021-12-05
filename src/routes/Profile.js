import { authService } from "myBase";
import React from "react";
import { useNavigate } from "react-router";

export default () => {
  let navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
