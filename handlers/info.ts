import { Handler } from "../types";

export const info: Handler = (req, res) => {
  res.send("Hello world");
};