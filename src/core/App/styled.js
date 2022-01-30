import styled from "styled-components";

export const StyledPage = styled.div`
    margin:115px auto;
    padding: 16px;
    max-width: 1244px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        margin:0px auto;
  }
`;

