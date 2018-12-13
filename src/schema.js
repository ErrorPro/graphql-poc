import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';

import * as userQueries from 'user/queries';
import * as carMutations from 'car/mutations';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      ...userQueries,
    }),
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: () => ({
      ...carMutations,
    }),
  }),
});
