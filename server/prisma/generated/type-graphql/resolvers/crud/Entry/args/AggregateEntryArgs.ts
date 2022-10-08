import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryOrderByWithRelationInput } from "../../../inputs/EntryOrderByWithRelationInput";
import { EntryWhereInput } from "../../../inputs/EntryWhereInput";
import { EntryWhereUniqueInput } from "../../../inputs/EntryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateEntryArgs {
  @TypeGraphQL.Field(_type => EntryWhereInput, {
    nullable: true
  })
  where?: EntryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EntryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EntryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EntryWhereUniqueInput, {
    nullable: true
  })
  cursor?: EntryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
