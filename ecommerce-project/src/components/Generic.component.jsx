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

export const GenericLink = ({
  href = "#",
  className = "",
  children = null,
}) => {
  return (
    <a href={href} className={`${className}`}>
      {children}
    </a>
  );
};
