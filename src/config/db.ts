// @/connection.ts
import { Sequelize } from "sequelize-typescript";
import ActorsModel from "../models/actors.model";
import AuthorsModel from "../models/authors.model";
import MoviesModel from "../models/movies.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "human,.",
  database: "movielibrary",
  sync: { force: true },
  models: [ActorsModel, AuthorsModel, MoviesModel],
});

export default connection;
