'use strict';

/**
 * monthly-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-post.monthly-post');
