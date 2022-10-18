'use strict';

/**
 * weakly-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::weakly-post.weakly-post');
