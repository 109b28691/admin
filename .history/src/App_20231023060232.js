import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
