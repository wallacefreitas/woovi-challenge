import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryCreateInput } from "../../../inputs/EntryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEntryArgs {
  @TypeGraphQL.Field(_type => EntryCreateInput, {
    nullable: false
  })
  data!: EntryCreateInput;
}
