import { graphql } from 'relay-runtime';

export const allEntries = graphql`
  query AppQuery {
    entries {
      id,
      title,
      description,
      date,
      value,
      type
    }
  }
`;