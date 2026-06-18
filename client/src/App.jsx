import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

import "./styles/sidebar.css";
import "./styles/dashboard.css";

function App() {
  return (
    <div className="app">
      {/* Fixed left navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="app-main">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;