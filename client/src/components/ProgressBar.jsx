function ProgressBar({ label, progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar__header">
        <span className="progress-bar__label">{label}</span>
        <span className="progress-bar__percentage">{progress}%</span>
      </div>

      <div className="progress-bar__track">
        <div
          className="progress-bar__fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label} progress`}
        />
      </div>
    </div>
  );
}

export default ProgressBar;