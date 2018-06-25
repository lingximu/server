/* eslint-disable no-debugger */
const { getUserById } = require('@s-service/base/userDb');
const { getFruitById, getFruitBeyondLikes } = require('@s-service/base/fruitDb');
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
  },
  Fruit: (fruit) => {
    if (fruit.name && fruit.price !== undefined) { return fruit; } else { return getFruitById(fruit.id); }
  }
};

export default resolvers;
