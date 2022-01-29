import Loading from "../../common/Loading";
import Warning from "../../common/Warning";
import PortfolioTile from "../PortfolioTile";
import { StyledPortfolioTile } from "./styled";

export const Content = ({ personalHomepageStatus, personalHomepageData }) => {
  switch (personalHomepageStatus) {
    case "initial":
      return null;
    case "loading":
      return <Warning />;
    case "error":
      return <Warning />;
    case "success":
      return (
        <StyledPortfolioTile>
          <PortfolioTile personalHomepageData={personalHomepageData} />
        </StyledPortfolioTile>
      );
    default:
      throw new Error(`incorrect status: ${personalHomepageStatus}`);
  }
};
