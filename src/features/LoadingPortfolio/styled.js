import styled from "styled-components";

export const Section = styled.section``;

export const StyledPortfolioTile = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}) {
    grid-template-columns: 1fr;
  }
`;
