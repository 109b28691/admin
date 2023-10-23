import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from "./pages/home/userList/UserList";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
