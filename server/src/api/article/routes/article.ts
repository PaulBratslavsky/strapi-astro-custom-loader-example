/**
 * article router.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article', {
  config: {
    find: {
      middlewares: [
        'api::article.populate-article',
      ],
    },
    findOne: {
      middlewares: [
        'api::article.populate-article',
      ],
    },
  },  
});
