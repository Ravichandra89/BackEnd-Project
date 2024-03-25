import asynchHandler from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

const loginUser = asynchHandler(async (req, res) => {
  res.status(200).json({
    message: "Successfully Login",
  });
});

export { registerUser };
