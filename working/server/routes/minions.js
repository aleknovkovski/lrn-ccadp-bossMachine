const express = require('express');
const minionsRouter = express.Router();
const {getAllFromDatabase} = require('../db')

minionsRouter.get('/', (req, res) => {
   const minionsData = getAllFromDatabase('minions')
   res.status(200).json({ success: true, data: minionsData })
})

module.exports = minionsRouter;
