export const generateToken = (user, msg, status, res) => {
  const token = user.generateJsonWebToken();

  res
    .status(status)
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "lax", // OK for localhost
      secure: false,   // true only in HTTPS
      path: "/",       // IMPORTANT
    })
    .json({
      success: true,
      msg,
      user,
      token,
    });
};