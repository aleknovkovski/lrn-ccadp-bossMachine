const express = require('express');
const {
   getAllFromDatabase,
   getFromDatabaseById,
   addToDatabase,
   updateInstanceInDatabase,
   deleteFromDatabasebyId
} = require("../db");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");
const ideasRouter = express.Router();

ideasRouter.get('/', (req, res) => {
   const ideasData = getAllFromDatabase('ideas')
   res.status(200).send(ideasData)
})

ideasRouter.get('/:ideaId', (req, res) => {
   const ideaID = String(req.params.ideaId)
   const ideaData = getFromDatabaseById('ideas', ideaID)
   res.status(200).send(ideaData)
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
  req.body.id = String(req.params.ideaId)
  let updatedIdeaInstance = updateInstanceInDatabase('ideas', req.body);
  res.status(201).send(updatedIdeaInstance);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const ideaID = String(req.params.ideaId)
  let deletedSuccessfully = deleteFromDatabasebyId('ideas', ideaID);
  res.status(201).send(deletedSuccessfully);
});

module.exports = ideasRouter;
