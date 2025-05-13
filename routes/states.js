const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');

// General state routes
router.route('/')
    .get(statesController.getAllStates);

router.route('/:state')
    .get(statesController.getState);

// Fun Facts routes
router.route('/:state/funfact')
    .get(statesController.getFunFact)
    .post(statesController.addFunFacts)
    .patch(statesController.updateFunFact)
    .delete(statesController.deleteFunFact);

// Specific state info routes
router.route('/:state/capital')
    .get(statesController.getCapital);

router.route('/:state/nickname')
    .get(statesController.getNickname);

router.route('/:state/population')
    .get(statesController.getPopulation);

router.route('/:state/admission')
    .get(statesController.getAdmission);

module.exports = router;
