import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import rootReducer from "./store/reducers/Index";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import "./App.css";
import Home from "./static/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import AssetDashboard from "./components/assets/AssetDashboard";
import AddNewAsset from "./components/assets/AddNewAsset";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/assets" element={<AssetDashboard />} />
          <Route path="/assets/new" element={<AddNewAsset />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
