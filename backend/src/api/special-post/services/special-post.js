'use strict';

/**
 * special-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-post.special-post');
