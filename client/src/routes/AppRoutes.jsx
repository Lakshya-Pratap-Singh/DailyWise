import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Missions from "../pages/Missions";
import Objectives from "../pages/Objectives";
import Intelligence from "../pages/Intelligence";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/objectives" element={<Objectives />} />
      <Route path="/intelligence" element={<Intelligence />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;