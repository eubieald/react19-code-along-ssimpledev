export const ProgressBarContainer = ({ className = "", children = null }) => {
  return (
    <div className={`progress-bar-container ${className}`}>{children}</div>
  );
};

export const ProgressBar = ({ className = "", children = null }) => {
  return <div className={`progress-bar ${className}`}>{children}</div>;
};
