import { app } from "./app.js";
import { connectDB } from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running server http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(`Something went wrong Error: ${error.message}`);
  });
