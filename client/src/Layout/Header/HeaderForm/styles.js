import styled from 'styled-components';
import { Login } from '@styled-icons/entypo/Login';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const FormLogin = styled.form`
  right: 0;
  box-shadow: 0 9px 70px 0 rgba(7, 7, 10, 0.34);
  width: 320px;
  position: absolute;
  display: block;
  pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
  top: 100%;
  max-width: 320px;
  z-index: 3;
  background-color: #14151d;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.4s ease;
`;

export const LoginTitle = styled.div`
  background-color: #12131a;
  padding: 20px;
  position: relative;
`;

export const TitleSpan = styled.span`
  font-size: 13px;
  color: #aaadb2;
  line-height: 18px;
  padding-right: 30px;
`;
export const TitleButton = styled.button`
  width: 10px;
  height: 10px;
  display: block;
  position: absolute;
  top: 30px;
  right: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.4s ease;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 0;
`;
export const TitleClose = styled(Close)`
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  fill: #fff;
  transition: 0.4s ease;
  overflow: hidden;
`;
export const LoginGroup = styled.div`
  padding: 0 20px;
  position: relative;
  display: block;
  margin-top: 10px;
`;
export const LoginInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #1f212c;
  background-color: transparent;
  height: 44px;
  font-size: 14px;
  color: #aaadb2;
  transition: 0.4s ease;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  &:focus {
    border-color: #e50914;
    outline: none;
  }
`;
export const ForgotPass = styled.a`
  position: absolute;
  font-size: 14px;
  color: #e50914;
  right: 20px;
  line-height: 44px;
  top: 0;
  transition: 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;
export const LoginLabel = styled.label`
  font-weight: normal;
  font-size: 14px;
  color: #aaadb2;
  position: absolute;
  left: 20px;
  top: 14px;
  transition: 0.4s ease;
  display: inline-block;
  pointer-events: none;
  ${LoginInput}:focus + & {
    color: #e50914;
    font-size: 10px;
    top: -5px;
  }
`;

export const LoginWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 25px;
`;

export const LoginBtn = styled.button`
  width: 110px;
  height: 38px;
  display: flex;
  flex-direction: rpw;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  font-size: 14px;
  text-transform: uppercase;
  color: #171920;
  font-family: inherit;
  letter-spacing: 0.2px;
  border: none;
  cursor: pointer;
  transition: 0.4s ease;
  overflow: visible;
  line-height: inherit;
`;
export const LoginIcon = styled(Login)`
  fill: #171920;
  width: 18px;
  height: 18px;
  fill-rule: evenodd;
  transition: 0.4s ease;
  margin-left: 5px;
  overflow: hidden;
`;
export const LoginCheck = styled.div`
  position: relative;
`;
export const RememberMe = styled.input.attrs({
  type: 'checkbox',
})`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: 0;
    opacity: 0;
    top: 5px;
    width: 100%;
    cursor: pointer;
  }

  z-index: 99;
  --moz-appearance: none;
  margin: 0;
  padding: 0;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;
export const Personal = styled.label`
  display: inline-block;

  ${RememberMe}:not(:checked) + &, ${RememberMe}:checked + & {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    font-size: 12px;
    line-height: 18px;
    color: #aaadb2;
    font-weight: 400;
  }
  ${RememberMe}:checked + &:before, ${RememberMe}:not(:checked) + &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background: url('/check.png') no-repeat center;
  }
  ${RememberMe}:checked +  &:after {
    opacity: 1;
    transform: scale(1);
  }
  ${RememberMe}:not(:checked) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    background: url('/checked.svg') no-repeat center;
    background-size: 18px 18px;
    transition: 0.3s linear;
  }
`;

export const LoginLink = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #aaadb2;
`;
export const RegisterNow = styled.a`
  color: #e50914;
  text-decoration: underline;
  margin-left: 5px;
  transition: 0.4s ease;
  background-color: transparent;
  cursor: pointer;
`;
