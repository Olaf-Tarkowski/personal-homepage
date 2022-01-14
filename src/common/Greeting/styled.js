import styled from "styled-components";
import picture from "../../images/narty_narty.jpg"
import { ReactComponent as Envelope } from "../../images/envelope.svg";

export const Tile = styled.div`
    margin-bottom: 72px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 66px;
`;

export const Image = styled.div`
    width: 398px;
    height: 398px;
    background-position: center;
    background-size: cover;
    background-image: url(${picture});
    border-radius: 50% ;
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
`;

export const Welcom = styled.div`
    margin-bottom: 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${({theme}) => theme.color.slateGray};
`;

export const Name = styled.div`
    margin-bottom: 35px;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
`;

export const BasicInfo = styled.div`
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.color.slateGray};
`;

export const Mail = styled.a`
    text-decoration: none;
    
`;

export const Button = styled.button`
    transition: 0.9s;
    padding:12px 16px; 
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.indigo};
    :hover {
        transform: scale(1.15);
        background-color: ${({theme}) => theme.color.vinRouge};
    }
    :active {
        transform: scale(1.15);
        background-color: ${({theme}) => theme.color.vinRougeLessSaturated};
    }
`;

export const EnvelopeIcon = styled(Envelope)`
    margin-right:14px;
`;