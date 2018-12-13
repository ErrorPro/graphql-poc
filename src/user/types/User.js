import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { getCar } from 'car/queries';

export default new GraphQLObjectType({
  name: 'User',
  fields: {
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    cars: getCar,
  },
});
