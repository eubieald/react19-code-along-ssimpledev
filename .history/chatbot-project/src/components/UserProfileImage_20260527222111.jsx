export const UserProfileImage = ({ imgSrc = "", altText, className = "" }) => {
  return (
    <img
      height="50"
      width="50"
      src={imgSrc}
      alt={altText}
      className={className}
    />
  );
};
