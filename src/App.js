import Footer from "./common/Footer";
import Greeting from "./common/Greeting";
import Portfolio from "./common/Portfolio";
import Tiles from "./common/Tiles";
import skillList from "./common/Tiles/Data/skillList";
import targetList from "./common/Tiles/Data/targetList";
import { StyledPage } from "./styled";

function App() {
  return (
    <StyledPage>
      <Greeting />
      <Tiles title={"My skillset includes 🛠️"} data={skillList} />
      <Tiles title={"What I want to learn next 🚀"} data={targetList} />
      <Portfolio />
      <Footer />
    </StyledPage>
  );
};

export default App;
