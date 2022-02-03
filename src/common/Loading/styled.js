import styled from "styled-components";
import { ReactComponent as Loading } from "./images/Spinner.svg";

export const LoadingSection = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingImage = styled(Loading)`
  width: 160px;
  height: 160px;
  animation-name: rotate;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.52, 0.05, 0.32, 0.85);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    width: 90px;
    height: 90px;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
