import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response) => {
  const { email, password } = request.body;

  const userLogin = userLoginService(email, password);

  return response.status(200).json({ token: userLogin });
};
export default userLoginController;
