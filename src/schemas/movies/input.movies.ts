import { InputType, Field, ID } from "type-graphql";

@InputType()
export default class InputMovies {
  @Field(() => ID, { nullable: true })
  declare moviesId?: string;

  @Field({ nullable: true })
  declare tittle: string;

  @Field({ nullable: true })
  declare releaseYears: string;

  @Field({ nullable: true })
  declare rating: string;

  // @Field((type) => ActorsModel)
  // declare actors: ActorsModel;
}
