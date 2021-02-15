const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat
} = require('graphql');

/**
 * Product
 * @type {GraphQLObjectType<any, any>}
 */
module.exports = new GraphQLObjectType({
    name: 'Product',
    description: 'This represent a product',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        detail: {type: GraphQLString},
        price: {type: GraphQLFloat},
        image: {type: GraphQLString}
    })
});