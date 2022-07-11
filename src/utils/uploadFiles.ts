import multer from "multer";

export default {
  storage: multer.diskStorage({
    filename(req, file, callback) {
      const fileName = `${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};