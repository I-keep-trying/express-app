import { Route } from "./types";

export const routes: Route[] = [
  {
    method: "get",
    path: "/info",
    middleware: [],
    handler: info,
  },
    {
    method: "get",
    path: "/api/persons",
    middleware: [],
    handler: persons,
  },
];