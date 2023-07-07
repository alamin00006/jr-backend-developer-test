require("dotenv").config();

const app = require("./app");
const DBConnect = require("./utilis/dbConnect");
DBConnect();
// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
