import 'app-module-path/register';

import Schema from './schema';

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

const dataInMemory = {
  users: [
    {
      firstName: 'Ven',
      lastName: 'Korolev',
      cars: [
        {
          brand: 'Suzuki',
        },
      ],
    },
  ],
};

app.use('/graphql', graphqlHTTP(req => ({
  schema: Schema,
  context: {
    req,
    data: dataInMemory,
  },
  graphiql: true,
})));

app.listen(3000, () => console.log('App is listening on 3000 port'));
