import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryUpdateManyMutationInput } from "../../../inputs/EntryUpdateManyMutationInput";
import { EntryWhereInput } from "../../../inputs/EntryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEntryArgs {
  @TypeGraphQL.Field(_type => EntryUpdateManyMutationInput, {
    nullable: false
  })
  data!: EntryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EntryWhereInput, {
    nullable: true
  })
  where?: EntryWhereInput | undefined;
}
