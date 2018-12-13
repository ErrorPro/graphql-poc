import { GraphQLList, GraphQLString } from 'graphql';
import { Car } from 'car/types';

export default ({
  type: new GraphQLList(Car),
  args: {
    firstName: { type: GraphQLString },
  },
  resolve: ({ firstName }, _, ctx) => ctx.data.users.find(e => e.firstName === firstName).cars,
});
