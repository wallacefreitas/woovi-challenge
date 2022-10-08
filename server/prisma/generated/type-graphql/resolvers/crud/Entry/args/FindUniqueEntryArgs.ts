import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryWhereUniqueInput } from "../../../inputs/EntryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEntryArgs {
  @TypeGraphQL.Field(_type => EntryWhereUniqueInput, {
    nullable: false
  })
  where!: EntryWhereUniqueInput;
}
