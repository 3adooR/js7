const {GraphQLSchema, GraphQLObjectType, GraphQLList} = require("graphql");
const getData = require('./../../get-data');
const CartType = require('./cart');
const UserType = require('./user');
const ProductType = require('./product');

/**
 * RootQueryType
 * @type {GraphQLSchema}
 */
module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            carts: {
                type: GraphQLList(CartType),
                resolve: async function () {
                    let {data} = await getData(`carts`);
                    return data;
                }
            },
            users: {
                type: GraphQLList(UserType),
                resolve: async function () {
                    let {data} = await getData(`users`);
                    return data;
                },
            },
            products: {
                type: GraphQLList(ProductType),
                resolve: async function () {
                    let {data} = await getData(`products`);
                    return data;
                },
            }
        },
    }),
});