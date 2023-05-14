const express = require('express');
const minionsRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId} = require('../db')

minionsRouter.param('minionId', (req, res, next, id) => {
  const minion = getFromDatabaseById('minions', id);
  if (minion) {
    next();
  } else {
    res.status(404).send();
  }
});

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

minionsRouter.put('/:minionId', (req, res, next) => {
  req.body.id = String(req.params.minionId)
  let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
  res.status(201).send(updatedMinionInstance);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  const minionID = String(req.params.minionId)
  let deletedSuccessfully = deleteFromDatabasebyId('minions', minionID);
  res.status(204).send(deletedSuccessfully);
});

module.exports = minionsRouter;
