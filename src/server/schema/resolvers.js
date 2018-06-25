/* eslint-disable no-debugger */
const { getUserById } = require('@s-service/base/userDb');
const { getFruitBeyondLikes } = require('@s-service/base/fruitDb');
const { getCartById } = require('@s-service/base/cartDb');
const { getOrderById, getOrdersByUserName } = require('@s-service/base/orderDb');

const resolvers = {
  Query: {
    user: (parent, {id}) => {
      return getUserById(id);
    },
    fruits: (parent, {likes = 0}) => {
      return getFruitBeyondLikes(likes);
    },
    cart: (root) => {
      return getCartById();
    },
    order: (parent, {id}) => {
      return getOrderById(id);
    },
    orders: (parent, {name}) => {
      return getOrdersByUserName(name);
    }
  }
};

export default resolvers;
