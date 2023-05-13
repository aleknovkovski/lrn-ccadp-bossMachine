const express = require('express');
const ideasRouter = express.Router();

ideasRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked for ideas!" })
})

module.exports = ideasRouter;
