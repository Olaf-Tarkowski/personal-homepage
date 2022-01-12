import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const Welcom = styled.div`
    margin-bottom: 24px;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.color.slateGray};
`;

export const Mail = styled.a`
margin-bottom: 24px;
    text-decoration: none;
    border: none;
    padding: 0px;
    font-weight: 900;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.color.black};
`;

export const BasicInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.color.black};
`;
