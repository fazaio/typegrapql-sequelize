import { Column, CreatedAt, ForeignKey, BelongsTo, DataType, Default, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { Field, ID, ObjectType } from "type-graphql";
import MoviesModel from "./movies.model";

@Table({ modelName: "actors", tableName: "actors" })
@ObjectType()
export default class ActorsModel extends Model {
  @Field((type) => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare actorsId: any;

  @Field()
  @Column
  declare firstName: string;

  @Field()
  @Column
  declare lastName: string;

  @Field()
  @Column
  declare nationality: string;

  //
  @Field(() => [MoviesModel])
  @ForeignKey(() => MoviesModel)
  // @Column
  declare moviesId: any;

  @Field(() => [MoviesModel])
  @BelongsTo(() => MoviesModel)
  declare movies: MoviesModel[];
}
