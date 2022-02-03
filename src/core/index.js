import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { themeDark, themeLight } from "../theme";
import PersonalHomepage from "./App";
import { useSelector } from "react-redux";
import { selectToggleTheme } from "../common/ThemeSwitch/themeSlice";

const App = () => {
  const isDarkTheme = useSelector(selectToggleTheme);

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
};

export default App;
