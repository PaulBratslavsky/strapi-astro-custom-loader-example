/**
 * `populate-article` middleware
 */

const populate = {
  populate: {
    cover: {
      fields: ["url", "alternativeText", "name", "width", "height"],
    },
    blocks: {
      on: {
        "shared.media": {
          populate: {
            file: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },

        "shared.slider": {
          populate: {
            files: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
          },
        },

        "shared.quote": {
          populate: true,
        },

        "shared.rich-text": {
          populate: true,
        },
      },
    },
  },
};

/*
{
      fields: ['url', 'alternativeText', 'name', 'width', 'height' ],
    }

*/

import type { Core } from "@strapi/strapi";

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  console.log("populate-article middleware");
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    strapi.log.info("In populate-article middleware.");

    await next();
  };
};
