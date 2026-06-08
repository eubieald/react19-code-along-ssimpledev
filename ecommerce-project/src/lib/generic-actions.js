const getAdditionalHeaderMetaData = () => {
  const accessToken = localStorage.getItem("accessToken");
  const publicToken = localStorage.getItem("publicToken");

  return {
    // "User-Agent": navigator.userAgent,
    Authorization: `Bearer ${accessToken || publicToken || ""}`,
  };
};

export const genericRequest = async ({
  path,
  overridePath = false,
  method = "GET",
  headerOptions = {},
  options = {},
  removeHeaderKey,
  replaceContentType,
  isAdminPath = false,
}) => {
  let endpointFullPath;

  if (overridePath) {
    endpointFullPath = path;
  } else if (isAdminPath) {
    endpointFullPath = `${import.meta.env.VITE_API_BASE_PATH_ADMIN}${path}`;
  } else {
    endpointFullPath = `${import.meta.env.VITE_API_BASE_PATH}${path}`;
  }

  const additionalHeaders = getAdditionalHeaderMetaData();

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...headerOptions,
    ...additionalHeaders,
  };

  if (removeHeaderKey) {
    delete headers[removeHeaderKey];
  }

  if (replaceContentType) {
    headers["Content-Type"] = replaceContentType;
  }

  const response = await fetch(endpointFullPath, {
    method,
    headers,
    ...options,
  });

  return response;
};
