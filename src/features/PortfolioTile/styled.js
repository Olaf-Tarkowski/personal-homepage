import styled from "styled-components";

export const Tile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  line-height: 140%;
  padding: 56px;
  max-width: 592px;
  letter-spacing: 0.05em;
  background-color: ${({ theme }) => theme.color.boxBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    transform: scale(1.03);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0px 0px 24px 0px;
  color: ${({ theme }) => theme.color.list.headerText};
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 16px;
  }
`;
export const TitleSection = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
  }
`;

export const Content = styled.p`
  margin: 0px;
`;

export const Description = styled.p`
  margin: 0px 0px 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.color.list.underscore};
  color: ${({ theme }) => theme.color.list.marker};
  transition: 0.5s;
  :hover {
    text-decoration-color: ${({ theme }) => theme.color.list.marker};
  }
  :active {
    color: ${({ theme }) => theme.color.list.activeText};
    text-decoration-color: ${({ theme }) => theme.color.list.activeUnderscore};
  }
`;
