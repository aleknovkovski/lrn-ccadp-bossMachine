const express = require('express');
const minionsRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById, addToDatabase} = require('../db')

minionsRouter.get('/', (req, res) => {
   const minionsData = getAllFromDatabase('minions')
   res.status(200).send(minionsData)
})

minionsRouter.get('/:minionId', (req, res) => {
   const minionId = String(req.params.minionId)
   const minionData = getFromDatabaseById('minions', minionId)
   res.status(200).send(minionData)
})

minionsRouter.post('/', (req, res) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
})

module.exports = minionsRouter;
