import { graphql } from "react-relay";

export const deleteOneEntryMutation = graphql`
  mutation DeleteEntryMutation($where: EntryWhereUniqueInput!) {
    deleteOneEntry(where: $where) {
      id
    }
  }
`;