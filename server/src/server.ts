import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { ExampleResolver } from "./resolvers/ExampleResolver";

export const startAPI = async () => {
  const app = express();
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.set("port", process.env.PORT || 4000);

  const schema = await buildSchema({
    resolvers: [ExampleResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res }),
    playground: {
      settings: {
        "request.credentials": "include",
      },
    },
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(app.get("port"), () => {
    console.log(
      "  GraphQL server is running at http://localhost:%d/graphql in %s mode",
      app.get("port"),
      app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
  });
};
