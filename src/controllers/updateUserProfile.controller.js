import updateUserService from "../services/updateUser.service";

const updatedUserContoller = (request, response) => {
  //console.log("params", request.params);
  const { uuid } = request.params;
  //console.log("uuidParams", uuid);
  const { name, email } = request.body;

  const updatedUser = updateUserService(uuid, name, email);
  console.log("updatedUser", updatedUser);
  return response.status(200).json(updatedUser);
};

export default updatedUserContoller;
