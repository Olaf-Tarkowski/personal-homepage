import { BasicInfo, Content, Description, GitHubImage, Tile } from "./styled";

const Portfolio = () => {
  return (
    <>
      <Tile>
        <GitHubImage />
        <BasicInfo>
          Portfolio
        </BasicInfo>
        <Description>
          My recent projects
        </Description>
        <Content>
          Lorem
        </Content>
      </Tile>
    </>
  );
};

export default Portfolio;