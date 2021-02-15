const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString
} = require('graphql');

/**
 * User
 * @type {GraphQLObjectType<any, any>}
 */
module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'This represent a user',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        login: {type: new GraphQLNonNull(GraphQLString)},
    })
});