const express = require('express');
const minionsRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById} = require('../db')

minionsRouter.get('/', (req, res) => {
   const minionsData = getAllFromDatabase('minions')
   res.status(200).json({ success: true, data: minionsData })
})

minionsRouter.get('/:minionId', (req, res) => {
   const minionId = String(req.params.minionId)
   const minionData = getFromDatabaseById('minions', minionId)
   res.status(200).json({ success: true, data: minionData })
})

module.exports = minionsRouter;
