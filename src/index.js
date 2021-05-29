import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import StyledEngineProvider from "@material-ui/core/StyledEngineProvider";
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import reportWebVitals from "./reportWebVitals";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

ReactDOM.render(
  <BrowserRouter>
    {/* <StyledEngineProvider injectFirst> */}
    {/* <StylesProvider jss={jss} injectFirst> */}
      <App />
    {/* </StylesProvider> */}
    {/* </StyledEngineProvider> */}
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
