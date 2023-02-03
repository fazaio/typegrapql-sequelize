import { Resolver, Query, Mutation, Arg, Ctx } from "type-graphql";
import AuthorsModel from "../../models/authors.model";
import InputAuthors from "./input.authors";

@Resolver()
export default class AuthorResolver {
  @Query(() => [AuthorsModel])
  async getAuthors() {
    let res = await AuthorsModel.findAll();
    return res;
  }

  @Mutation(() => AuthorsModel)
  async createAuthors(@Arg("authors") authors: InputAuthors) {
    delete authors.authorsId;

    console.log(authors);

    let res = await (await AuthorsModel.create({ ...authors })).save();
    return res;
  }

  @Mutation(() => AuthorsModel)
  async updateAuthors(@Arg("authors") authors: InputAuthors) {
    await AuthorsModel.update(
      { ...authors },
      { where: { authorsID: authors.authorsId } }
    );

    let res = await AuthorsModel.findOne({
      where: { authorsID: authors.authorsId },
    });

    return res;
  }
}
