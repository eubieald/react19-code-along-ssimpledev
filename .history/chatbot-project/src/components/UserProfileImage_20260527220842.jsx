export const UserProfileImage = ({
  imgSrc = "https://supersimple.dev/images/profile-1.jpg",
  altText,
}) => {
  return <img height="50" width="50" src={imgSrc} alt={altText} />;
};
