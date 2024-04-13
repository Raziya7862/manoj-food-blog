import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true; // Assuming you have a way to determine user status

  return (
    <Router>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />

        {/* Conditional Routes based on currentUser */}
        <Route path="/register" element={!currentUser ? <Register /> : <Homepage />} />
        <Route path="/login" element={!currentUser ? <Login /> : <Homepage />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
