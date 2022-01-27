import PortfolioTile from "../PortfolioTile";

export const Content = ({ personalHomepageStatus, personalHomepageData }) => {
  switch (personalHomepageStatus) {
    case "initial":
      return null;
    case "loading":
      return <p>loading</p>;
    case "error":
      return <p>error</p>;
    case "success":
      return <PortfolioTile personalHomepageData={personalHomepageData} />;
    default:
      throw new Error(`incorrect status: ${personalHomepageStatus}`);
  }
};
