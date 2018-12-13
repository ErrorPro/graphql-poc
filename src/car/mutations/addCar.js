import { GraphQLString } from 'graphql';
import { Car } from 'car/types';

export default ({
  type: Car,
  args: {
    firstName: { type: GraphQLString },
    brand: { type: GraphQLString },
  },
  resolve: (_, { firstName, brand }, ctx) => {
    ctx.data.users.find(e => e.firstName === firstName).cars.push({ brand });

    return {
      brand,
    };
  },
});
