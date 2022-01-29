import styled from "styled-components";

export const Tile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.slateGray};
  background-color: ${({ theme }) => theme.color.white};
  padding: 56px;
  max-width: 592px;
  letter-spacing: 0.05em;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 5px;
  transition: 0.5s;
  :hover {
    transform: scale(1.03);
  }
`;

export const Title = styled.h1`
  margin: 0px 0px 24px 0px;
  color: ${({ theme }) => theme.color.indigo};
  text-transform: capitalize;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;
export const TitleSection = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const Content = styled.p`
  margin: 0px;
`;

export const Description = styled.p`
  margin: 0px 0px 24px 0px;
`;

export const Link = styled.a`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.color.indigoTransp};
  color: ${({ theme }) => theme.color.indigo};
  :active {
        color: ${({theme}) => theme.color.vinRouge}
    }
`;
