import styled from "styled-components";
import picture from "./images/Profile_Picture.jpg";
import { ReactComponent as Envelope } from "./images/Envelope.svg";

export const Tile = styled.div`
  margin-bottom: 72px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  width: 398px;
  height: 398px;
  background-position: center;
  background-size: cover;
  background-image: url(${picture});
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 150px;
    height: 150px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Welcom = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-bottom: 8px;
  }
`;

export const Name = styled.div`
  margin-bottom: 35px;
  font-weight: 900;
  font-size: 38px;
  line-height: 46px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.headerLine};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 22px;
    margin-bottom: 16px;
  }
`;

export const BasicInfo = styled.div`
  margin-bottom: 32px;
  max-width: 700px;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const Mail = styled.a`
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

export const EnvelopeIcon = styled(Envelope)`
  margin-right: 14px;
`;
