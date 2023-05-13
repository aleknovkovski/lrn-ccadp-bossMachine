const express = require('express');
const minionsRouter = require("./routes/minions");
const meetingsRouter = require("./routes/meetings");
const ideasRouter = require("./routes/ideas");
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked!" })
})

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
