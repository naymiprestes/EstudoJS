import users from "../database";

const verifyIsAdmMindleware = (request, response, next) => {
  console.log("requestParams-isAdm", request.params);
  const { uuid } = request.params;
  const { email } = request.user;

  const user = users.find((user) => user.email === email);

  if (!user.isAdm && user.uuid !== uuid) {
    return response.status(401).json({ message: "Não tem autorização" });
  }

  next();
};

export default verifyIsAdmMindleware;
