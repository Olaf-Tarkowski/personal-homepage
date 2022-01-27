import PortfolioTile from "../PortfolioTile";
import { StyledPortfolioTile } from "./styled";

export const Content = ({ personalHomepageStatus, personalHomepageData }) => {
  switch (personalHomepageStatus) {
    case "initial":
      return null;
    case "loading":
      return <p>loading</p>;
    case "error":
      return <p>error</p>;
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
