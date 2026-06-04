export const MainHeaderComponent = ({ className = "", children = null }) => {
  return <div className={`header ${className}`}>{children}</div>;
};

export const MainHeaderLeftSection = ({ className = "", children = null }) => {
  return <div className={`left-section ${className}`}>{children}</div>;
};

export const MainHeaderMiddleSection = ({
  className = "",
  children = null,
}) => {
  return <div className={`middle-section ${className}`}>{children}</div>;
};

export const HeaderRightSection = ({ className = "", children = null }) => {
  return <div className={`right-section ${className}`}>{children}</div>;
};
