const strapi = require('@strapi/strapi');
const app = strapi({ distDir: './dist' });

module.exports = async (req, res) => {
  await app.start();
  const ctx = app.koa.createContext(req, res);
  await app.koa.callback()(ctx);
};