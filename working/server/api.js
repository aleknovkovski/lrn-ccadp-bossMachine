const express = require('express');
const minionsRouter = require("./routes/minions");
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked!" })
})

apiRouter.use('/minions', minionsRouter);

module.exports = apiRouter;
