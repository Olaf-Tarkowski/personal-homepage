import Footer from "../../common/Footer";
import Greeting from "../../common/Greeting";
import Portfolio from "../../common/Portfolio";
import Goals from "../../common/Tiles/Goals";
import Skills from "../../common/Tiles/Skills";
import { StyledPage } from "./styled";

function App() {
  return (
    <StyledPage>
      <Greeting />
      <Skills />
      <Goals />
      <Portfolio />
      <Footer />
    </StyledPage>
  );
};

export default App;
