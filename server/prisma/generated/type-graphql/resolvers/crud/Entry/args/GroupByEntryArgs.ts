import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryOrderByWithAggregationInput } from "../../../inputs/EntryOrderByWithAggregationInput";
import { EntryScalarWhereWithAggregatesInput } from "../../../inputs/EntryScalarWhereWithAggregatesInput";
import { EntryWhereInput } from "../../../inputs/EntryWhereInput";
import { EntryScalarFieldEnum } from "../../../../enums/EntryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEntryArgs {
  @TypeGraphQL.Field(_type => EntryWhereInput, {
    nullable: true
  })
  where?: EntryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EntryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EntryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "title" | "description" | "date" | "value" | "type">;

  @TypeGraphQL.Field(_type => EntryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EntryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
