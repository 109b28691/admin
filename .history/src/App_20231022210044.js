import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/topbar/Topbar";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        other pages
      </div>
    </div>
  );
}

export default App;
