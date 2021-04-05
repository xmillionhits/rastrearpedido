const { Router } = require('express');
const rastreioController = require('./domain//rastreio/rastreio.controller');
const statusController = require('./domain/status/status.controller');

const Routes = new Router();

Routes.get('/', async (req, res) => {
  res.redirect('/status');
});

Routes.get('/status', async (req, res) => {
  await statusController.show(req, res);
});

Routes.get('/api/rastreio/v1', async (req, res) => {
  await rastreioController.run(req, res);
});


Routes.get('/api/rastreio/v1/xml', async (req, res) => {
  await rastreioController.runXML(req, res);
});

module.exports = Routes;
