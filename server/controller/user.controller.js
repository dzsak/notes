export const user = async (req, res, next) => {
  const { username, email, profilePicture } = req.user;
  res.status(200).json({
    username,
    email,
    profilePicture
  });
}
