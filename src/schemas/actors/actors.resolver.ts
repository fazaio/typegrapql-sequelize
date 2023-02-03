import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import connection from "../../config/db";
import ActorsModel from "../../models/actors.model";
import MoviesModel from "../../models/movies.model";
import InputActors from "./input.actors";

@Resolver()
export default class ActorsResovler {
  @Query(() => [ActorsModel])
  async getActors() {
    let res = await ActorsModel.findAll({ include: { model: MoviesModel } });
    return res;
  }

  @Mutation(() => ActorsModel)
  async createActors(@Arg("actors") actors: InputActors) {
    delete actors.actorsId;
    let res = await (await ActorsModel.create({ ...actors })).save();
    return res;
  }

  @Mutation(() => ActorsModel)
  async updateActors(@Arg("actors") actors: InputActors) {
    await ActorsModel.update({ ...actors }, { where: { actorsId: actors.actorsId } });

    let res = await ActorsModel.findOne({
      where: { actorsId: actors.actorsId },
    });

    return res;
  }
}
