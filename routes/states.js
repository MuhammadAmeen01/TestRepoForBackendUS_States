const express = require('express');
const router = express.Router();
const statesController = require('../controllers/statesController');
const validateStateParam = require('../middleware/validateState');

// General state routes
router.route('/')
    .get(statesController.getAllStates);

router.route('/:state')
    .all(validateStateParam)
    .get(statesController.getState);

router.route('/:state/funfact')
    .all(validateStateParam)
    .get(statesController.getFunFact)
    .post(statesController.addFunFacts)
    .patch(statesController.updateFunFact)
    .delete(statesController.deleteFunFact);

router.route('/:state/capital')
    .all(validateStateParam)
    .get(statesController.getCapital);

router.route('/:state/nickname')
    .all(validateStateParam)
    .get(statesController.getNickname);

router.route('/:state/population')
    .all(validateStateParam)
    .get(statesController.getPopulation);

router.route('/:state/admission')
    .all(validateStateParam)
    .get(statesController.getAdmission);

module.exports = router;
