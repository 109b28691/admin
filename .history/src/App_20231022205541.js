import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container"></div>
      <Sidebar />
      other pages
    </div>
  );
}

export default App;
