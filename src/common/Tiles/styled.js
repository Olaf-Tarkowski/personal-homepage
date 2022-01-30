import styled from "styled-components";

export const Tile = styled.div`
  padding: 32px;
  margin-bottom: 72px;
  background-color: ${({ theme }) => theme.color.boxBackground};
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  margin: 0px;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.color.headerLine};
  font-weight: 900;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.04em;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 18px;
    padding-bottom: 12px;
  }
`;

export const List = styled.ul`
  margin: 0px;
  padding-left: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 8px;
  font-weight: 400;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakpoint.navMax}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.list.marker};
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.list.text};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    font-size: 14px;
  }
`;

export const Line = styled.div`
  margin-bottom: 32px;
  max-width: 100%;
  height: 1px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.list.line};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-bottom: 12px;
  }
`;
