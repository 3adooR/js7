const {protocol, host, gqlPort, dataPort, dataUrl} = require('./config');
const {graphqlHTTP} = require('express-graphql');
const path = require("path");
const express = require('express');
const query = require('./types/query/root');

// Run GraphQL server
const gql = express();
gql.use('/', graphqlHTTP({schema: query, graphiql: true}));
gql.listen(gqlPort, () => console.log(`GraphQL API server running at ${protocol}://${host}:${gqlPort}`));

// Run Data server
const data = express();
data.get(`${dataUrl}/carts`, (req, res) => res.sendFile(path.join(__dirname, dataUrl, 'carts.json')));
data.get(`${dataUrl}/users`, (req, res) => res.sendFile(path.join(__dirname, dataUrl, 'users.json')));
data.get(`${dataUrl}/products`, (req, res) => res.sendFile(path.join(__dirname, dataUrl, 'products.json')));
data.listen(dataPort, () => console.log(`Data server running at ${protocol}://${host}:${dataPort}`));