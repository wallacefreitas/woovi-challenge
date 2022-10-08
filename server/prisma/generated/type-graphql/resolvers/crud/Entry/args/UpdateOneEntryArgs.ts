import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryUpdateInput } from "../../../inputs/EntryUpdateInput";
import { EntryWhereUniqueInput } from "../../../inputs/EntryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEntryArgs {
  @TypeGraphQL.Field(_type => EntryUpdateInput, {
    nullable: false
  })
  data!: EntryUpdateInput;

  @TypeGraphQL.Field(_type => EntryWhereUniqueInput, {
    nullable: false
  })
  where!: EntryWhereUniqueInput;
}
