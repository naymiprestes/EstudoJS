import users from "../database";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);
  console.log(user);

  if (!user) {
    return "email ou senha incorretos";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "email ou senha incorretos";
  }

  const token = jwt.sign({ user: user }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  console.log("token", token);

  return token;
};

export default userLoginService;
