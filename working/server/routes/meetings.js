const express = require('express');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res) => {
   res.status(200).json({ success: true, data: "it worked for meetings!" })
})

module.exports = meetingsRouter;
