import { useState } from "react";
import "./App.css";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const Button = styled.button`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.text.secondary};
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lightTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#3745e9",
      },
      background: {
        default: "#f5f5f5",
      },
      text: {
        primary: "#333",
        secondary: "#dddddd",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#93d4f9",
      },
      background: {
        default: "#333",
      },
      text: {
        primary: "#fff",
        secondary: "#333",
      },
    },
  });

  function handelClick() {
    setDarkMode(!darkMode);
  }

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h2" align="center">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>

        <Button onClick={handelClick}>Toggle Theme</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
