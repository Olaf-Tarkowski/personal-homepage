import styled from "styled-components";
import { ReactComponent as Error } from "./images/Danger.svg";

export const Section = styled.section`
  margin: 0px;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.headerLine};
`;

export const ErrorImage = styled(Error)`
  margin: 0px 0px 15px 0px;
`;

export const Notification = styled.p`
  margin: 0px 0px 32px 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.04em;
`;

export const BasicInfo = styled.p`
  margin: 0px 0px 32px 0px;
  text-align: center;
  max-width: 415px;
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0.04em;
`;

export const LinkButton = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  transition: 0.9s;
  padding: 12px 16px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.buttonLink.text};
  background-color: ${({ theme }) => theme.color.buttonLink.background};
  :hover {
    transform: scale(1.15);
    background-color: ${({ theme }) => theme.color.buttonLink.hover};
  }
  :active {
    transform: scale(1.15);
    background-color: ${({ theme }) => theme.color.buttonLink.active};
  }
`;
