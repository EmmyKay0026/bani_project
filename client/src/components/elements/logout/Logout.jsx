import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogoutWrapper, LogoutBtn } from "./Logout.style";
import { setLoginFalse, setLoginTrue } from "../../../store/features/isLoginSlice";
import { setBranchForm } from "../../../store/features/modalSlice";


const Logout = () => {
  const isLogin = useSelector((state) => state.reducer.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))
    isLogin ? dispatch(setLoginTrue()) : dispatch(setLoginFalse());
    navigate("/");
  };
  return (
    <LogoutWrapper>
      <LogoutBtn onClick={logoutHandler}>Logout</LogoutBtn>
    </LogoutWrapper>
  );
};

export default Logout;