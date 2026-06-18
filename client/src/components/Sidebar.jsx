import { NavLink } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/", label: "Command Center" },
  { path: "/missions", label: "Missions" },
  { path: "/objectives", label: "Objectives" },
  { path: "/intelligence", label: "Intelligence" },
  { path: "/settings", label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo / Brand */}
      <div className="sidebar-brand">
        <span className="sidebar-logo">DAILYWISE</span>
        <span className="sidebar-tagline">Tactical HUD</span>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-nav-item ${
                    isActive ? "sidebar-nav-item--active" : ""
                  }`
                }
              >
                <span className="sidebar-nav-label">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <span className="sidebar-status-dot"></span>
        <span>Systems Online</span>
      </div>
    </aside>
  );
}

export default Sidebar;