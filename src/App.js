import "react-perfect-scrollbar/dist/css/styles.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "./common/GlobalStyles";
// import './mixins/chartjs';
import theme from "./theme";
import routes from "./routes";
import "./App.css";

function App() {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;

// import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
// import { StylesProvider, jssPreset } from "@material-ui/styles";
// import { create } from "jss";
// import rtl from "jss-rtl";

// const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// <StyledEngineProvider injectFirst>
// <StylesProvider jss={jss}>

// </StylesProvider>
// </StyledEngineProvider>
