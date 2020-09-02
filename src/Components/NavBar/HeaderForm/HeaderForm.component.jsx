import React from "react";
import {
  FormLogin,
  LoginTitle,
  LoginGroup,
  LoginWrap,
  LoginLink,
  TitleButton,
  TitleSpan,
  TitleClose,
  LoginInput,
  LoginLabel,
  ForgotPass,
  LoginBtn,
  LoginIcon,
  LoginCheck,
  RememberMe,
  Personal,
  RegisterNow,
} from "./HeaderForm.styles";
const HeaderForm = ({ open, setOpen }) => {
  const closeByIcon = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <FormLogin open={open}>
      <LoginTitle>
        <TitleSpan>
          Enter your username and password to enjoy watching HD movies online
          for free
        </TitleSpan>
        <TitleButton onClick={(e) => closeByIcon(e)}>
          <TitleClose />
        </TitleButton>
      </LoginTitle>
      <LoginGroup>
        <LoginInput />
        <LoginLabel>Email</LoginLabel>
      </LoginGroup>
      <LoginGroup>
        <LoginInput />
        <LoginLabel>Password</LoginLabel>
        <ForgotPass>Forgot?</ForgotPass>
      </LoginGroup>
      <LoginWrap>
        <LoginBtn>
          Login
          <LoginIcon />
        </LoginBtn>
        <LoginCheck>
          <RememberMe />
          <Personal>Remember Me</Personal>
        </LoginCheck>
      </LoginWrap>
      <LoginLink>
        Not a member yet?
        <RegisterNow>Register Now!</RegisterNow>
      </LoginLink>
    </FormLogin>
  );
};
export default HeaderForm;
