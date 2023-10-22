import Sidebar from "./components/topbar/Topbar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";

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
