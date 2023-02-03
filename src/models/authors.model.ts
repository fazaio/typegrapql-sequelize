import { Column, CreatedAt, DataType, Default, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";

import { Field, ID, ObjectType } from "type-graphql";

@Table({ modelName: "authors", tableName: "authors" })
@ObjectType()
export default class AuthorsModel extends Model {
  @Field((type) => ID)
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare authorsId: string;

  @Field()
  @Column
  declare firstName: string;

  @Field()
  @Column
  declare lastName: string;

  @Field()
  @Column
  declare nationality: string;

  @Field()
  @Column
  declare readonly createdAt: Date;

  @Field()
  @Column
  declare readonly UpdatedAt: Date;
}
