const multer = require("multer");
const { v4: uudiv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file) {
    cb(null, "uploads/");
  },
  filename: function (req, file){ 
    cb(file.filename)
        // `${uudiv4()}_${path.extname(file.originalname)}`);
  },
});

const upload = multer({storage:storage})

const fileFilter = (req, file, cb) => {
  const allowFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
