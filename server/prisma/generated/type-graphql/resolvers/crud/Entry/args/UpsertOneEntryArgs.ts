import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryCreateInput } from "../../../inputs/EntryCreateInput";
import { EntryUpdateInput } from "../../../inputs/EntryUpdateInput";
import { EntryWhereUniqueInput } from "../../../inputs/EntryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEntryArgs {
  @TypeGraphQL.Field(_type => EntryWhereUniqueInput, {
    nullable: false
  })
  where!: EntryWhereUniqueInput;

  @TypeGraphQL.Field(_type => EntryCreateInput, {
    nullable: false
  })
  create!: EntryCreateInput;

  @TypeGraphQL.Field(_type => EntryUpdateInput, {
    nullable: false
  })
  update!: EntryUpdateInput;
}
