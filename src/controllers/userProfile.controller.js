import userProfileService from "../services/userProfile.service";

const userProfileController = (request, response) => {
  console.log("headers", request.headers);

  const uuid = request.headers.uuid;
  const userProfile = userProfileService(uuid);

  return response.status(200).json(userProfile);
};

export default userProfileController;
