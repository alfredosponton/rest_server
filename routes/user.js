const { Router } = require("express");

const router = Router();

const {
  userGet,
  userPut,
  userPost,
  UserDelete,
} = require("../controllers/user");

router.get("/", userGet);

router.put("/:id", userPut);

router.post("/", userPost);

router.delete("/", UserDelete);

module.exports = router;
