import styled from "styled-components";

export const Tile = styled.div`
    background-color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.color.black};
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: ${({ theme }) => theme.color.indigo};
`;

export const ListItem = styled.li`
`;

export const Line = styled.span`
    color: ${({ theme }) => theme.color.black};
`;