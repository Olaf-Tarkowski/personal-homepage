import LoadingPortfolio from "../../features/LoadingPortfolio";
import { BasicInfo, Content, Description, GitHubImage, Tile } from "./styled";

const Portfolio = () => {
  return (
    <>
      <Tile>
        <GitHubImage/>
        <BasicInfo>
          Portfolio
        </BasicInfo>
        <Description>
          My recent projects
        </Description>
        <Content>
          <LoadingPortfolio />
        </Content>
      </Tile>
    </>
  );
};

export default Portfolio;