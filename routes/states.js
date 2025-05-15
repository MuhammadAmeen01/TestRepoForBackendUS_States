// const express = require('express');
// const router = express.Router();
// const statesController = require('../controllers/statesController');
// //const validateStateParam = require('../middleware/validateState');

// // General state routes
// router.route('/')
//   .get(statesController.getAllStates)
//   .post(statesController.createState);

// router.route('/:state')
//     .all(validateStateParam)
//     .get(statesController.getState);

// router.route('/:state/funfact')
//     .all(validateStateParam)
//     .get(statesController.getFunFact)
//     .post(statesController.addFunFacts)
//     .patch(statesController.updateFunFact)
//     .delete(statesController.deleteFunFact);

// router.route('/:state/capital')
//     .all(validateStateParam)
//     .get(statesController.getCapital);

// router.route('/:state/nickname')
//     .all(validateStateParam)
//     .get(statesController.getNickname);

// router.route('/:state/population')
//     .all(validateStateParam)
//     .get(statesController.getPopulation);

// router.route('/:state/admission')
//     .all(validateStateParam)
//     .get(statesController.getAdmission);

// module.exports = router;

const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');

// Get all states or filter by contig=true/false
router.route('/')
  .get(statesController.getAllStates);

// Get a specific state by abbreviation (e.g. /states/CA)
router.route('/:state')
  .get(statesController.getState);

// Fun facts for a specific state
router.route('/:state/funfact')
  .get(statesController.getFunFact)
  .post(statesController.addFunFacts)
  .patch(statesController.updateFunFact)
  .delete(statesController.deleteFunFact);

// Specific attributes for a state
router.route('/:state/capital')
  .get(statesController.getCapital);

router.route('/:state/nickname')
  .get(statesController.getNickname);

router.route('/:state/population')
  .get(statesController.getPopulation);

router.route('/:state/admission')
  .get(statesController.getAdmission);

module.exports = router;
