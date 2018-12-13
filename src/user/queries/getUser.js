import { GraphQLList } from 'graphql';
import { User } from 'user/types';

export default ({
  type: new GraphQLList(User),
  resolve: (_, __, ctx) => ctx.data.users,
});
