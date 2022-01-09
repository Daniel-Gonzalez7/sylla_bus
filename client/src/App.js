import Nav from "./components/Nav";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material/";
import Form from "./components/Form";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Nav />
      <Form />
    </ThemeProvider>
  );
};

export default App;
