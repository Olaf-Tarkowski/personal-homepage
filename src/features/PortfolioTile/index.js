const PortfolioTile = ({ personalHomepageData }) => {
  return (
    <>
      {personalHomepageData.map(({ id, name, html_url, description }) => (
          <div>
          <p>{id}</p>
          {name}
          {html_url}
          </div>
      ))}
    </>
  );
};

export default PortfolioTile;
