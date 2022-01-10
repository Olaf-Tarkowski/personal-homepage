import Greeting from "./features/Greeting";
import Learn from "./features/Learn";
import Skills from "./features/Skills";
import { StyledPage } from "./styled";

function App() {
  return (
    <StyledPage>
      <Greeting />
      <Skills />
      <Learn />
    </StyledPage>
  );
};

export default App;
