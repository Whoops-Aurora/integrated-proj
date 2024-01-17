const mongoose = require("mongoose");

 const { ATLAS_URI } = process.env;
exports.connect = () => {
  mongoose
    .connect(ATLAS_URI)
    .then(console.log(`DB connected successfully`))
    .catch((error) => {
      console.log(`DB connection failed`);
      console.log(error);
      process.exit(1);
    });
};
