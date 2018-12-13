import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Car',
  fields: {
    brand: {
      type: GraphQLString,
    },
  },
});
