import express from "express";
import userRoutes from "./routes/users.route";
import "dotenv/config";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hello, Word!");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
