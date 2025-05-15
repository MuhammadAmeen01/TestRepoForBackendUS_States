const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');

// Route: GET all states, or filter by contig=true/false
router.route('/')
  .get(statesController.getAllStates);

// Route: GET a single state by its code (e.g., /states/CA)
router.route('/:state')
  .get(statesController.getState);

// Route: GET a random fun fact, POST new facts, PATCH update, DELETE by index
router.route('/:state/funfact')
  .get(statesController.getFunFact)
  .post(statesController.addFunFacts)
  .patch(statesController.updateFunFact)
  .delete(statesController.deleteFunFact);

// Route: GET capital of the state
router.route('/:state/capital')
  .get(statesController.getCapital);

// Route: GET nickname of the state
router.route('/:state/nickname')
  .get(statesController.getNickname);

// Route: GET population of the state
router.route('/:state/population')
  .get(statesController.getPopulation);

// Route: GET admission date of the state
router.route('/:state/admission')
  .get(statesController.getAdmission);

module.exports = router;
