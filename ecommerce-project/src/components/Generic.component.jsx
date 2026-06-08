import { Link, NavLink } from "react-router";

export const GenericBlock = ({ className = "", children = null }) => {
  return <div className={`generic-block ${className}`}>{children}</div>;
};

export const GenericRow = ({ className = "", children = null }) => {
  return <div className={`generic-row ${className}`}>{children}</div>;
};

export const GenericColumn = ({ className = "", children = null }) => {
  return <div className={`generic-column ${className}`}>{children}</div>;
};

export const GenericLeftColumn = ({ className = "", children = null }) => {
  return <div className={`generic-left-column ${className}`}>{children}</div>;
};

export const GenericCenterColumn = ({ className = "", children = null }) => {
  return <div className={`generic-center-column ${className}`}>{children}</div>;
};

export const GenericRightColumn = ({ className = "", children = null }) => {
  return <div className={`generic-right-column ${className}`}>{children}</div>;
};

export const GenericPageTitle = ({ className = "", children = null }) => {
  return <h1 className={`generic-page-title ${className}`}>{children}</h1>;
};

export const GenericLabel = ({ className = "", children = null }) => {
  return <label className={`generic-label ${className}`}>{children}</label>;
};

export const GenericLink = ({
  href = "#",
  className = "",
  children = null,
}) => {
  return (
    // We need to use Link component from react-router instead of anchor tag
    // to prevent page reloads and enable client-side routing
    <Link to={`/${href}`} className={`${className}`}>
      {children}
    </Link>
  );
};

export const GenericNavLink = ({
  href = "#",
  className = "",
  children = null,
}) => {
  return (
    // We need to use NavLink component to apply active class to the link when it's active
    <NavLink to={`/${href}`} className={`${className}`}>
      {children}
    </NavLink>
  );
};
