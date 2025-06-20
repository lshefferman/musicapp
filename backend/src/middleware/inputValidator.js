import Joi from "joi";

const playlistSchema = Joi.object({
  name: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
});
const validatePlaylist = (req, res, next) => {
  const { error } = playlistSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      message: error.details[0].message,
    });
  next();
};
export default validatePlaylist;
