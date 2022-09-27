import jwt from "jsonwebtoken";

const verifyAuthTokenMindleware = (request, response, next) => {
  let token = request.headers.authorization;

  if (!token) {
    return response.status(401).json({ message: "não há token" });
  }

  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return response.status(401).json({ message: "token inválido" });
    }
    request.user = decoded.user;
    next();
  });
};
export default verifyAuthTokenMindleware;
