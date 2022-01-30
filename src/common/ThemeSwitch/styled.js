import styled, {css} from "styled-components";
import { ReactComponent as Sun } from "./images/Sun.svg";

export const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  `;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: inherit;
  outline-offset: 8px;
`;

export const Text = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  margin-right: 12px;
`;

export const Box = styled.span`
  background: ${({ theme }) => theme.color.themeSwitch.background};
  border: 1px solid;
  padding: 3px;
  border-radius: 12px;
  width: 48px;
  display: flex;
`;

export const IconWraper = styled.span`
  background: currentColor;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  transition: transform 0.3s;
  ${({ moveToRight }) => moveToRight && css`
    transform: translateX(20px);
  `}
`;

export const SunIcon = styled(Sun)`
color: ${({theme}) => theme.color.themeSwitch.icon}
`;
