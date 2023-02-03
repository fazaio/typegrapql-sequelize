import { Column, CreatedAt, ForeignKey, HasMany, DataType, Default, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

import { Field, ID, ObjectType } from "type-graphql";
import ActorsModel from "./actors.model";

@Table({ modelName: "movies", tableName: "movies" })
@ObjectType({ implements: ActorsModel })
export default class MoviesModel extends Model {
  @Field((type) => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare moviesId: any;

  // movies has many actor's //
  @Field((type) => ActorsModel)
  @HasMany(() => ActorsModel, { as: "actors" })
  declare actors: ActorsModel[];

  @Field()
  @Column
  declare tittle: string;

  @Field()
  @Column
  declare releaseYears: string;

  @Field()
  @Column
  declare rating: string;

  @Field()
  @Column
  declare readonly createdAt: Date;

  @Field()
  @Column
  declare readonly UpdatedAt: Date;
}
