import styled from "styled-components";
import { ReactComponent as GitHub } from "./images/GitHub.svg";
import { ReactComponent as Facebook } from "./images/Facebook.svg";
import { ReactComponent as LinkedIn } from "./images/LinkedIn.svg";
import { ReactComponent as Instagram } from "./images/Instagram.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Welcom = styled.div`
  margin-bottom: 24px;
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.slateGray};
`;

export const Mail = styled.a`
  transition: 0.9s;
  margin-bottom: 24px;
  text-decoration: none;
  border: none;
  padding: 0px;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
  :hover {
    color: ${({ theme }) => theme.color.indigo};
  }
  :active {
    color: ${({ theme }) => theme.color.vinRouge};
  }
`;

export const BasicInfo = styled.div`
  max-width: 850px;
  margin-bottom: 56px;
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.black};
`;

export const LinkIcons = styled.div``;

export const LinkIcon = styled.a``;

export const GitHubImage = styled(GitHub)`
  transition: 0.9s;
  height: 50px;
  weight: 50px;
  margin-right: 24px;
  path {
    transition: fill, 0.9s;
  }
  :hover {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRouge};
    }
  }
  :active {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRougeLessSaturated};
    }
  }
`;

export const FacebookImage = styled(Facebook)`
  transition: 0.9s;
  height: 50px;
  weight: 50px;
  margin-right: 24px;
  path {
    transition: fill, 0.9s;
  }
  :hover {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRouge};
    }
  }
  :active {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRougeLessSaturated};
    }
  }
`;

export const LinkedInImage = styled(LinkedIn)`
  transition: 0.9s;
  height: 50px;
  weight: 50px;
  margin-right: 24px;
  path {
    transition: fill, 0.9s;
  }
  :hover {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRouge};
    }
  }
  :active {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRougeLessSaturated};
    }
  }
`;

export const InstagramImage = styled(Instagram)`
  transition: 0.9s;
  height: 50px;
  weight: 50px;
  path {
    transition: fill, 0.9s;
  }
  :hover {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRouge};
    }
  }
  :active {
    transform: scale(1.15);
    path {
      fill: ${({ theme }) => theme.color.vinRougeLessSaturated};
    }
  }
`;
