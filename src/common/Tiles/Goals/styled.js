import styled from "styled-components";

export const List = styled.ul`
    margin: 0px;
    padding-left: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 50px;
    row-gap: 8px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        grid-template-columns: 1fr 1fr;
    }
`;