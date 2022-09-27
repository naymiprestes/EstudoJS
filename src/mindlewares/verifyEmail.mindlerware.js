import users from "../database";

const verifyEmailMindleware = (request, response, next) => {
  const { email } = request.body;

  const userAlreadyExists = users.find((user) => user.email == email);

  if (userAlreadyExists) {
    return response.status(400).json({ message: "endreço de email já usado." });
  }

  next();
};

export default verifyEmailMindleware;
