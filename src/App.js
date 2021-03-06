import "react-perfect-scrollbar/dist/css/styles.css";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "./common/GlobalStyles";
// import './mixins/chartjs';
import theme from "./theme";
// import routes from "./routes";
import Routesfn from "./routes"
import "./App.css";

function App() {
  const routing = useRoutes(Routesfn());
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
}

export default App;
