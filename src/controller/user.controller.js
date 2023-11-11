const express = require('express');
const { getAllArray } = require('../service/user.service');
const buildResponse = require('../helper/buildResponse');
const route = express.Router();

route.get('/', async (req, res) => {
  const data = await getAllArray();
  buildResponse(res, 200, data);
});

module.exports = route;
