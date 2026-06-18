function MissionCard({ title, status, streak }) {
  // Map status to badge styling
  const statusClass =
    status === 'Completed'
      ? 'mission-card__badge--completed'
      : 'mission-card__badge--progress';

  return (
    <article className="mission-card">
      <div className="mission-card__header">
        <h3 className="mission-card__title">{title}</h3>
        <span className={`mission-card__badge ${statusClass}`}>{status}</span>
      </div>
      <p className="mission-card__streak">
        <span className="mission-card__streak-label">Streak</span>
        <span className="mission-card__streak-value">{streak}</span>
      </p>
    </article>
  );
}

export default MissionCard;