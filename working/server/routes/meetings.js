const express = require('express');
const meetingsRouter = express.Router();

const {
   getAllFromDatabase,
   addToDatabase,
   deleteFromDatabasebyId,
   createMeeting
} = require("../db");

meetingsRouter.get('/', (req, res) => {
   const meetingsData = getAllFromDatabase('meetings')
   res.status(200).send(meetingsData)
})

meetingsRouter.post('/', (req, res) => {
  const newMeeting = addToDatabase('meetings', createMeeting());
  res.status(201).send(newMeeting);
})
meetingsRouter.delete('/:meetingId', (req, res, next) => {
  const meetingID = String(req.params.meetingId)
  let deletedSuccessfully = deleteFromDatabasebyId('meetings', meetingID);
  res.status(201).send(deletedSuccessfully);
});

module.exports = meetingsRouter;
