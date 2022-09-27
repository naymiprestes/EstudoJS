import users from "../database";

const updateUserService = (uuid, name, email) => {
  const updateUser = {
    name,
    email,
    updateOn: new Date(),
  };

  const userIndex = users.findIndex((element) => element.uuid === uuid);

  if (userIndex === -1) {
    return " usuário não encontrado ";
  }

  users[userIndex] = { ...users[userIndex], ...updateUser };
  console.log(users[userIndex]);

  return users[userIndex];
};

export default updateUserService;
