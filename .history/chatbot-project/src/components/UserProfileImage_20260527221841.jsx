export const UserProfileImage = ({
  imgSrc = "",
  altText,
}) => {
  return <img height="50" width="50" src={imgSrc} alt={altText} />;
};
