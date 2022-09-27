import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, userPassword, isAdm) => {
  const hashedPassword = await bcrypt.hash(userPassword, 10);

  const date = new Date();

  const newUser = {
    name,
    email,
    password: hashedPassword,
    isAdm,
    uuid: uuidv4(),
    createdOn: date,
    updatedOn: date,
  };

  users.push(newUser);

  const { password, ...user } = newUser;

  return user;
};

export default createUserService;
