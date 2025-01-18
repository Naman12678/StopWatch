import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import TaskManager from "./pages/TaskManagerPage";
import Clock from "./pages/ClockPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-white text-white">
        {/* Navigation */}
        <Navigation />

        {/* Route Rendering */}
        <Routes>
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/" element={<Clock />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex justify-center gap-4 p-4">
      <div
        className={`flex justify-center items-center px-6 py-2 rounded-3xl border-2 transition-all ${
          location.pathname === "/task-manager"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <Link
          to="/task-manager"
          className="text-lg font-semibold hover:text-blue-300"
        >
          Task Manager
        </Link>
      </div>
      <div
        className={`flex justify-center items-center px-6 py-2 rounded-3xl border-2 transition-all ${
          location.pathname === "/"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-black"
        }`}
      >
        <Link
          to="/"
          className="text-lg font-semibold hover:text-blue-300"
        >
          Clock
        </Link>
      </div>
    </nav>
  );
}

export default App;
