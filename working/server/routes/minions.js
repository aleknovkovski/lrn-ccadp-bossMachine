const express = require('express');
const minionsRouter = express.Router();

minionsRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked for minions!" })
})

module.exports = minionsRouter;
