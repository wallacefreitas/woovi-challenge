import { graphql } from 'relay-runtime';

export const AllEntries = graphql`
    query AllEntriesQuery {
      entries {
        __id,
        id,
        title,
        description,
        date,
        value,
        type
      }
    },
  `;
