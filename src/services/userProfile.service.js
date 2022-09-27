import users from "../database";

const userProfileService = (uuid) => {
  const userProfile = users.find((user) => user.uuid === uuid);

  return userProfile;
};

export default userProfileService;
