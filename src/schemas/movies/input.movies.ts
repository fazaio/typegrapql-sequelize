import { InputType, Field, ID } from "type-graphql";
import ActorsModel from "../../models/actors.model";

@InputType()
export default class InputMovies {
  @Field(() => ID)
  declare moviesId?: string;

  @Field({ nullable: true })
  declare tittle: string;

  @Field({ nullable: true })
  declare releaseYears: string;

  @Field({ nullable: true })
  declare rating: string;
}
