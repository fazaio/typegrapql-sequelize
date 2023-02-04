import { Resolver, Query, Mutation, Arg, Ctx, FieldResolver, Root } from "type-graphql";
import ActorsModel from "../../models/actors.model";
import MoviesModel from "../../models/movies.model";
import InputMovies from "./input.movies";

@Resolver((of) => MoviesModel)
export default class MoviesResolver {
  @Query(() => [MoviesModel])
  async getMovies() {
    let res = await MoviesModel.findAll({ include: ActorsModel });

    return res;
  }
  @Mutation(() => MoviesModel)
  async createMovies(@Arg("movies") movies: InputMovies) {
    delete movies.moviesId;

    let res = await (await MoviesModel.create({ ...movies })).save();
    return res;
  }

  @Mutation(() => MoviesModel)
  async updateMovies(@Arg("authors") movies: InputMovies) {
    await MoviesModel.update({ ...movies }, { where: { authorsID: movies.moviesId } });

    let res = await MoviesModel.findOne({
      where: { authorsID: movies.moviesId },
    });

    return res;
  }

  // @FieldResolver((_type) => MoviesModel)
  // async actors(@Root() actors: ActorsModel): Promise<MoviesModel> {
  //   console.log(actors, "actors!");
  //   return (await MoviesModel.findOne(actors.moviesId))!;
  // }
}
