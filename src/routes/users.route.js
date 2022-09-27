import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUserController from "../controllers/listUser.controller";
import updatedUserContoller from "../controllers/updateUserProfile.controller";
import userLoginController from "../controllers/userLogin.controller";
import userProfileController from "../controllers/userProfile.controller";
import verifyAuthTokenMindleware from "../mindlewares/verifyAuthToken.mindleware";
import verifyEmailMindleware from "../mindlewares/verifyEmail.mindlerware";
import verifyIsAdmMindleware from "../mindlewares/verifyIsAdm.mindleware";

const router = Router();

router.post("", verifyEmailMindleware, createUserController);

router.get(
  "",
  verifyAuthTokenMindleware,
  verifyIsAdmMindleware,
  listUserController
);

router.post("/login", userLoginController);

router.get("/profile", verifyAuthTokenMindleware, userProfileController);

router.patch(
  "/:uuid",
  verifyAuthTokenMindleware,
  verifyIsAdmMindleware,
  updatedUserContoller
);

router.delete(
  "/:uuid",
  verifyAuthTokenMindleware,
  verifyIsAdmMindleware,
  deleteUserController
);

export default router;
