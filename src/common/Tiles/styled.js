import styled from "styled-components";

export const Tile = styled.div`
    padding: 32px;
    margin-bottom: 72px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 5px;
`;

export const Title = styled.h1`
    margin: 0px;
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
    color: ${({ theme }) => theme.color.slateGray};
`;