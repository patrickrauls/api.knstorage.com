require('dotenv').config();
const environment = process.env.ENV || 'development',
    config = require('./knexfile')[environment],
    knex = require('knex')(config);

module.exports = {
    create_user(user) {
        return knex('user')
            .insert(user)
            .returning('*')
    },
    read_user(query) {
        return knex
            .select('*')
            .from('user')
            .where(query)
    },
    update_user(user) {
        return knex('user')
            .update(user)
            .where(id, user.id)
            .returning('*')
    },
    delete_user(id) {
        return knex('user')
            .where(id)
            .del()
            .returning('*')
    },
    create_cart(cart) {
        return knex('cart')
            .insert(cart)
            .returning('*')
    },
    read_cart(query) {
        return knex
            .select('*')
            .from('cart')
            .where(query)
    },
    update_cart(cart) {
        return knex('cart')
            .update(cart)
            .where(id, cart.id)
            .returning('*')
    },
    delete_cart(id) {
        return knex('cart')
            .where(id)
            .del()
            .returning('*')
    },
    create_order(order) {
        return knex('order')
            .insert(order)
            .returning('*')
    },
    read_order(query) {
        return knex
            .select('*')
            .from('order')
            .where(query)
    },
    update_order(order) {
        return knex('order')
            .update(order)
            .where(id, order.id)
            .returning('*')
    },
    delete_order(id) {
        return knex('order')
            .where(id)
            .del()
            .returning('*')
    },
    create_account(account) {
        return knex('account')
            .insert(account)
            .returning('*')
    },
    read_account(query) {
        return knex
            .select('*')
            .from('account')
            .where(query)
    },
    update_account(account) {
        return knex('account')
            .update(account)
            .where(id, account.id)
            .returning('*')
    },
    delete_account(id) {
        return knex('account')
            .where(id)
            .del()
            .returning('*')
    }
}
/*
sign up 
    email
    password
    first name
    last name

cart
    cart
    product []
        quantity

checkout
    pickup address
    payment info



*/