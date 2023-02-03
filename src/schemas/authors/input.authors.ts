import { InputType, Field } from "type-graphql";

@InputType()
export default class inputAuthors {
  @Field({ nullable: true })
  declare authorsId?: number;

  @Field({ nullable: true })
  declare firstName: string;

  @Field({ nullable: true })
  declare lastName: string;

  @Field({ nullable: true })
  declare nationality: string;
}
