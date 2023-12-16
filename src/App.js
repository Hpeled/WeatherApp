import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { useSelector } from "react-redux";

const App = () => {
  const themeReducer = useSelector(({ themeReducer }) => themeReducer);

  const style = themeReducer.theme
    ? {
        background: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#FFFfFF ",
        minHeight: "100vh",
        color: "black",
      }
    : {
        background: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#676D7A",
        minHeight: "100vh",
        color: "white",
      };
  return (
    <Router>
      <Header />
      <div style={style}>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/favorite" component={FavoriteScreen} />
      </div>
    </Router>
  );
};

export default App;
