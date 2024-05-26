import User from '../model/user.model.js';

export const user = async (req, res, next) => {
  const { username, email, profilePicture } = await User.findById(req.user.id);
  res.status(200).json({
    username,
    email,
    profilePicture
  });
}
