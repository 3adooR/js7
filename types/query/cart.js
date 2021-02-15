const {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLString
} = require('graphql');
const UserType = require('./user');
const ProductType = require('./product');
const DataLoader = require('dataloader');
const getData = require('./../../get-data');

/**
 * Users loader
 * @type {DataLoader}
 */
const UsersLoader = new DataLoader((userIds) => {
    return getData(`users`).then(data => data.data.filter(user => userIds.includes(user.id)));
});

/**
 * Products loader
 * @type {DataLoader}
 */
const ProductsLoader = new DataLoader((productLists) => {
    let products = [];
    productLists.forEach((productList) => productList.forEach((product) => products.push(product)));
    return getData(`products`).then(data => data.data.filter(product => products.includes(product.id)));
});

/**
 * Cart
 * @type {GraphQLObjectType<any, any>}
 */
module.exports = new GraphQLObjectType({
    name: 'Cart',
    description: 'This represent a cart',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        user: {
            type: UserType,
            resolve: async function (cart) {
                return UsersLoader.load(cart.user);
            }
        },
        products: {
            type: ProductType,
            resolve: async function (cart) {
                let products = [];
                cart.products.forEach(function (product) {
                    products.push(product.id);
                });
                return ProductsLoader.load(products);
            }
        },
        order_date: {type: GraphQLString}
    })
});