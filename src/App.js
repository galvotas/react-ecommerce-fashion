import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Productspage } from "./pages/Productspage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { SingleProductPage } from "./pages/SingleProductPage";
import { Favoritespage } from "./pages/Favoritespage";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#111",
    },
    secondary: {
      main: "#7cb342",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Route path="/" component={Homepage} exact />
        <Route path="/products" component={Productspage} exact />
        <Route
          path="/products/product/:id"
          component={SingleProductPage}
          exact
        />
        <Route path="/favourite products" component={Favoritespage} exact />
      </Router>
    </ThemeProvider>
  );
}

export default App;
