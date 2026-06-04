export const HomeComponent = ({ className = "", children = null }) => {
  return <div className={`home-page ${className}`}>{children}</div>;
};
