// Required for TypeGraphQL
import "reflect-metadata";
import { startAPI } from "./server";

const main = async () => {
  await startAPI();
};

main();
