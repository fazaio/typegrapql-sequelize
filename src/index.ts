import "reflect-metadata";
import express from "express";
import connection from "./config/db";
import { buildSchema } from "type-graphql";
import ActorsResovler from "./schemas/actors/actors.resolver";
import { graphqlHTTP } from "express-graphql";
import AuthorResolver from "./schemas/authors/authors.resolver";
import path from "path";
import MoviesResolver from "./schemas/movies/movies.resolver";

const main = async () => {
  try {
    const app = express();

    await connection.sync();

    const schema = await buildSchema({
      // emitSchemaFile: true,
      emitSchemaFile: path.resolve(__dirname, "schemas/schema.gql"),
      resolvers: [ActorsResovler, AuthorResolver, MoviesResolver],
      validate: false,
    });

    app.use(
      "/graphql",
      graphqlHTTP({
        schema: schema,
        graphiql: true,
      })
    );

    app.listen(4000);
  } catch (e) {
    console.log(e);
  }
};

main();
