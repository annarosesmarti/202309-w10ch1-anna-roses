import "dotenv/config";
import chalk from "chalk";
import express from "express";

const app = express();
const port = process.env.PORT ?? 4000;

app.listen(+port, () => {
  console.log(
    chalk.blue(
      `Server listening on ${chalk.bgBlueBright(`http://localhost:${port}`)}`,
    ),
  );
});

app.use(express.json());

export default app;
