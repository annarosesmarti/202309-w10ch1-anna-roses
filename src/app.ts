import "dotenv/config";
import chalk from "chalk";
import express from "express";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(
    chalk.green(
      `Server listening on ${chalk.yellow(`http://localhost:${port}/`)}`,
    ),
  );
});

app.use(express.json());

export default app;
