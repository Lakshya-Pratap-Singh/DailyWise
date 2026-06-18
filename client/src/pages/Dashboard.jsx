import StatCard from '../components/StatCard';
import MissionCard from '../components/MissionCard';
import ProgressBar from '../components/ProgressBar';

// ─── Static sample data (Phase 1 — no API) ───────────────────────────────

const STATS = [
  { title: 'Mission Status', value: '12 Active' },
  { title: 'Current Streak', value: '18 Days' },
  { title: 'Active Objectives', value: '5' },
  { title: 'Completion Rate', value: '82%' },
];

const MISSIONS = [
  { title: 'Morning Training', status: 'Completed', streak: '12 Days' },
  { title: 'Read 20 Pages', status: 'In Progress', streak: '8 Days' },
  { title: 'Meditation', status: 'Completed', streak: '21 Days' },
];

const OBJECTIVES = [
  { label: 'Become React Developer', progress: 70 },
  { label: 'Build DailyWise', progress: 45 },
];

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Page Header */}
      <header className="dashboard-header">
        <h1 className="dashboard-header__title">Welcome Back, Operative</h1>
        <p className="dashboard-header__subtitle">Mission Control Overview</p>
      </header>

      {/* Statistics Section */}
      <section className="dashboard-section">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
        </div>
      </section>

      {/* Today's Missions Section */}
      <section className="dashboard-section">
        <h2 className="dashboard-section__title">Today&apos;s Missions</h2>
        <div className="missions-grid">
          {MISSIONS.map((mission) => (
            <MissionCard
              key={mission.title}
              title={mission.title}
              status={mission.status}
              streak={mission.streak}
            />
          ))}
        </div>
      </section>

      {/* Active Objectives Section */}
      <section className="dashboard-section">
        <h2 className="dashboard-section__title">Active Objectives</h2>
        <div className="objectives-list">
          {OBJECTIVES.map((objective) => (
            <ProgressBar
              key={objective.label}
              label={objective.label}
              progress={objective.progress}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;