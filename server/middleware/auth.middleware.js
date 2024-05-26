import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';
import { errorHandler } from '../utils/error.js';

export const validateJWT = async (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) return next(errorHandler(400, 'Not authorized'));

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  try {
    const user = await User.findById(decoded.id);
    if (!user) return next(errorHandler(400, 'Not authorized'));
    req.user = user;
    next();
  } catch (error) {
    return next(error);
  }
};
