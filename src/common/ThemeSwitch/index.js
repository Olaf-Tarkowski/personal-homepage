import { useDispatch, useSelector } from "react-redux";
import { Box, Button, IconWraper, Section, SunIcon, Text } from "./styled";
import { selectToggleTheme, toggleTheme } from "./themeSlice";

const ThemeSwitch = () => {
  const isDarkTheme = useSelector(selectToggleTheme);
  const dispatch = useDispatch();

  return (
    <Section>
      <Button onClick={() => dispatch(toggleTheme())}>
        <Text> Dark mode {isDarkTheme ? "on" : "off"}</Text>
        <Box>
          <IconWraper moveToRight={isDarkTheme}>
            <SunIcon />
          </IconWraper>
        </Box>
      </Button>
    </Section>
  );
};

export default ThemeSwitch;
