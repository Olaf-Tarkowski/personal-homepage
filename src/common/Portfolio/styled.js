import styled from "styled-components";
import { ReactComponent as GitHub } from "../../images/GitHub.svg";

export const Tile = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
`;

export const GitHubImage = styled(GitHub)`
    height: 40px;
    weight: 40px;
    margin-bottom: 13px;
`;

export const BasicInfo = styled.div`
    margin-bottom: 8px;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
`;

export const Description = styled.div`
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
`;

export const Content = styled.div`

`;
