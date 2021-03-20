'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    signup: async ctx => {
        // console.log('PARAMS  --', ctx.params.id);
        console.log('BODY  --', ctx.request.body);
        const knex = strapi.connections.default;
        const user = await knex('users-permissions_user').where({
            username: ctx.request.body.username
        });
        return { user }
    }
};
