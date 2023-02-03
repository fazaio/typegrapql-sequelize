import { ForeignKey } from "sequelize-typescript";
import { InputType, Field, ID } from "type-graphql";
import ActorsModel from "../../models/actors.model";

@InputType()
export default class InputActors implements Partial<ActorsModel> {
  @Field({ nullable: true })
  declare actorsId?: string;

  @Field((type) => ID)
  declare moviesId: any;

  @Field({ nullable: true })
  declare firstName: string;

  @Field({ nullable: true })
  declare lastName: string;

  @Field({ nullable: true })
  declare nationality: string;
}
