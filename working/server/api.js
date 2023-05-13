const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked!" })
})

module.exports = apiRouter;
