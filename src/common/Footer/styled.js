import styled from "styled-components";
import { ReactComponent as GitHub } from "../../images/GitHub.svg";
import { ReactComponent as Facebook } from "../../images/Facebook.svg";
import { ReactComponent as LinkedIn } from "../../images/LinkedIn.svg";
import { ReactComponent as Instagram } from "../../images/Instagram.svg";

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
    margin-bottom: 56px;
    font-size: 18px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.color.black};
`;

export const LinkIcons = styled.div`
`;

export const GitHubImage = styled(GitHub)`
    height: 40px;
    weight: 40px;
    path {fill: ${({theme}) => theme.color.black};}
`;

export const FacebookImage = styled(Facebook)`
    height: 40px;
    weight: 40px;
    path {fill: ${({theme}) => theme.color.black};}
`;

export const LinkedInImage = styled(LinkedIn)`
    height: 40px;
    weight: 40px;
    path {fill: ${({theme}) => theme.color.black};}
`;

export const InstagramImage = styled(Instagram)`
    height: 40px;
    weight: 40px;
    path {fill: ${({theme}) => theme.color.black};}
`;