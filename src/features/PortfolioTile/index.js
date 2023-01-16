import {
  Content,
  Description,
  Link,
  Tile,
  Title,
  TitleSection,
} from "./styled";

const PortfolioTile = ({ personalHomepageData }) => {
  return (
    <>
      {personalHomepageData.map(
        ({ id, name, html_url, description, homepage }) => (
          <Tile key={id}>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <TitleSection>
              <Content>
                Demo: <Link href={homepage}>Link to this website</Link>
              </Content>
              <Content>
                Code: <Link href={html_url}>Link to this repository</Link>
              </Content>
            </TitleSection>
          </Tile>
        )
      )}
    </>
  );
};

export default PortfolioTile;
