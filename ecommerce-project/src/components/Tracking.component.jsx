export const TrackingComponent = ({ className = "", children = null }) => {
  return <div className={`tracking-page ${className}`}>{children}</div>;
};

export const TrackingOrder = ({ className = "", children = null }) => {
  return <div className={`order-tracking ${className}`}>{children}</div>;
};

export const TrackingProgressLabelsContainer = ({
  className = "",
  children = null,
}) => {
  return (
    <div className={`progress-labels-container ${className}`}>{children}</div>
  );
};

export const TrackingProgressLabel = ({ className = "", children = null }) => {
  return <div className={`progress-label ${className}`}>{children}</div>;
};
