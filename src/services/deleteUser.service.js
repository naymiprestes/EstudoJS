import users from "../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "usuário não encontrado";
  }

  users.splice(userIndex, 1);

  const userUpdateAdm = users.find((user) => user.uuid === uuid);
  console.log("userDelete", userUpdateAdm);

  if (!userUpdateAdm.isAdm) {
    return "Você não tem autorização para atualizar.";
  }

  return { message: "Usuário excluído" };
};

export default deleteUserService;
