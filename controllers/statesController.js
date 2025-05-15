// const State = require('../models/State');
// const statesData = require('../models/statesData.json');

// // //State abv
// // const validStates = [
// //     'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
// //     'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
// //     'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
// //     'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
// //     'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
// //   ];
  
// //   const getCapital = (req, res) => {
// //     const stateData = getStateData(req.params.state);
// //     if (!stateData) return res.status(404).json({ message: 'Invalid state abbreviation parameter' });

// //     res.json({ state: stateData.state, capital: stateData.capital_city });
// // };

  
// //   module.exports = {
// //     getCapital,
// //     // export other controller functions as needed
// //   };
  

// // // Helper: Find state JSON data by code
// // const getStateData = (stateCode) =>
// //     statesData.find(state => state.code === stateCode.toUpperCase());



// // // GET all states (optionally filtered by contiguous/noncontiguous)
// // const getAllStates = async (req, res) => {
// //     let filteredStates = statesData;

// //     if (req.query.contig === 'true') {
// //         filteredStates = statesData.filter(state => state.code !== 'AK' && state.code !== 'HI');
// //     } else if (req.query.contig === 'false') {
// //         filteredStates = statesData.filter(state => state.code === 'AK' || state.code === 'HI');
// //     }

// //     const dbStates = await State.find();
// //     const statesWithFunFacts = filteredStates.map(state => {
// //         const match = dbStates.find(dbState => dbState.stateCode === state.code);
// //         return match ? { ...state, funfacts: match.funfacts } : state;
// //     });

// //     res.json(statesWithFunFacts);
// // };

// // // GET specific state by code
// // const getState = async (req, res) => {
// //     const stateCode = req.params.state.toUpperCase();
// //     const stateData = getStateData(stateCode);

// //     if (!stateData) return res.status(404).json({ message: 'Invalid state abbreviation parameter' });

// //     const dbState = await State.findOne({ stateCode });
// //     if (dbState?.funfacts) stateData.funfacts = dbState.funfacts;

// //     res.json(stateData);
// // };

// // // GET one random fun fact for a state
// // const getFunFact = async (req, res) => {
// //     const stateCode = req.params.state.toUpperCase();
// //     const dbState = await State.findOne({ stateCode });

// //     if (!dbState || !dbState.funfacts || dbState.funfacts.length === 0) {
// //         return res.status(404).json({ message: `No Fun Facts found for ${stateCode}` });
// //     }

// //     const randomFact = dbState.funfacts[Math.floor(Math.random() * dbState.funfacts.length)];
// //     res.json({ funfact: randomFact });
// // };

// // // POST new fun facts (array) for a state
// // const addFunFacts = async (req, res) => {
// //     const stateCode = req.params.state.toUpperCase();
// //     const { funfacts } = req.body;

// //     if (!funfacts || !Array.isArray(funfacts)) {
// //         return res.status(400).json({ message: 'Fun facts must be an array' });
// //     }

// //     let state = await State.findOne({ stateCode });

// //     if (state) {
// //         state.funfacts.push(...funfacts);
// //     } else {
// //         state = new State({ stateCode, funfacts });
// //     }

// //     await state.save();
// //     res.status(201).json(state);
// // };

// // // PATCH update a specific fun fact at index
// // const updateFunFact = async (req, res) => {
// //     const stateCode = req.params.state.toUpperCase();
// //     const { index, funfact } = req.body;

// //     if (index === undefined || funfact === undefined) {
// //         return res.status(400).json({ message: 'State fun fact index and value required' });
// //     }

// //     const state = await State.findOne({ stateCode });
// //     if (!state || !Array.isArray(state.funfacts) || index < 1 || index > state.funfacts.length) {
// //         return res.status(404).json({ message: `No Fun Fact found at that index for ${stateCode}` });
// //     }

// //     state.funfacts[index - 1] = funfact;
// //     await state.save();
// //     res.json(state);
// // };

// // // DELETE fun fact at index
// // const deleteFunFact = async (req, res) => {
// //     const stateCode = req.params.state.toUpperCase();
// //     const { index } = req.body;

// //     if (index === undefined) {
// //         return res.status(400).json({ message: 'State fun fact index required' });
// //     }

// //     const state = await State.findOne({ stateCode });
// //     if (!state || !Array.isArray(state.funfacts) || index < 1 || index > state.funfacts.length) {
// //         return res.status(404).json({ message: `No Fun Fact found at that index for ${stateCode}` });
// //     }

// //     state.funfacts.splice(index - 1, 1);
// //     await state.save();
// //     res.json(state);
// // };



// // // GET state nickname
// // const getNickname = (req, res) => {
// //     const stateData = getStateData(req.params.state);
// //     if (!stateData) return res.status(404).json({ message: 'Invalid state abbreviation parameter' });

// //     res.json({ state: stateData.state, nickname: stateData.nickname });
// // };

// // // GET state population
// // const getPopulation = (req, res) => {
// //     const stateData = getStateData(req.params.state);
// //     if (!stateData) return res.status(404).json({ message: 'Invalid state abbreviation parameter' });

// //     res.json({ state: stateData.state, population: stateData.population.toLocaleString() });
// // };

// // // GET state admission date
// // const getAdmission = (req, res) => {
// //     const stateData = getStateData(req.params.state);
// //     if (!stateData) return res.status(404).json({ message: 'Invalid state abbreviation parameter' });

// //     res.json({ state: stateData.state, admitted: stateData.admission_date });
// // };

// // module.exports = {
// //     getAllStates,
// //     getState,
// //     getFunFact,
// //     addFunFacts,
// //     updateFunFact,
// //     deleteFunFact,
// //     getCapital,
// //     getNickname,
// //     getPopulation,
// //     getAdmission
// // };
// // const data = require('../models/states.json')
// // const State = require('../models/State');

// const contigStates = ['AL','AZ','AR','CA','CO','CT','DE','FL','GA','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY']
// const nonContigStates = ['AK', 'HI']

// const getAllStates = async (req, res) => {
// 	const contig = req.query.contig;
// 	let states = data;

// 	if (contig) {
// 		if (contig === 'true') {
// 			states = data.filter(state => contigStates.includes(state.code));
// 		} else if (contig === 'false') {
// 			states = data.filter(state => nonContigStates.includes(state.code));
// 		} else {
// 			return res.status(400).json({ 'message': 'Invalid query parameter. Use "true" or "false".' });
// 		}
// 	}
	
// 	const stateFacts = await State.find();
// 	res.json(states.map(state => ({ ...state, funfacts: stateFacts.find(fact => fact.stateCode === state.code)?.funfacts })));
// }

// const getState = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	const stateFacts = await State.findOne({ stateCode });
// 	if (stateFacts?.funfacts.length < 1 || !stateFacts.funfacts) {
// 		return res.json(state);
// 	} else {
// 		res.json({ ...state, funfacts: stateFacts.funfacts});
// 	}
// }

// const getFunFact = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	const stateFacts = await State.findOne({ stateCode });
// 	if (stateFacts.funfacts.length < 1 || !stateFacts.funfacts) { 
// 		return res.json({ 'message': `No Fun Facts found for ${state.state}` });
// 	}
// 	const randomIndex = Math.floor(Math.random() * stateFacts.funfacts.length);
// 	res.json({
// 		"funfact": stateFacts.funfacts[randomIndex]
// 	});
// }

// const addFunFacts = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const newFacts = req.body.funfacts;

// 	const result = await State.findOneAndUpdate(
// 		{ stateCode },
// 		{ $push: { funfacts: { $each: newFacts } } },
// 		{ new: true }
// 	)
// 	res.json(result)
// }

// const updateFunFact = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const index = req.body.index;
// 	const update = req.body.funfact;

// 	const result = await State.findOneAndUpdate(
// 		{ stateCode },
// 		{ $set: { [`funfacts.${index-1}`]: update } },
// 		{ new: true }
// 	)
// 	res.json(result)
// }

// const deleteFunFact = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const index = req.body.index;

// 	await State.findOneAndUpdate(
// 		{ stateCode },
// 		{ $unset: { [`funfacts.${index-1}`]: 1 } },
// 		{ new: true }
// 	)

// 	const result = await State.findOneAndUpdate(
// 		{ stateCode },
// 		{ $pull: { funfacts: null } },
// 		{ new: true }	
// 	)
// 	res.json(result)
// }
	

// const getCapital = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	res.json({
// 		'state': state.state,
// 		'capital': state.capital_city
// 	});
// }

// const getNickname = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	res.json({
// 		'state': state.state,
// 		'nickname': state.nickname
// 	});
// }

// const getPopulation = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	res.json({
// 		'state': state.state,
// 		'population': state.population.toLocaleString()
// 	});
// }

// const getAdmission = async (req, res) => {
// 	const stateCode = req.params.state.toUpperCase();
// 	const state = data.find(state => state.code === stateCode);
// 	if (!state) {
// 		return res.status(404).json({ 'message': 'Invalid state abbreviation parameter' });
// 	}
// 	res.json({
// 		'state': state.state,
// 		'admitted': state.admission_date
// 	});
// }

// module.exports = {
// 	getAllStates,
// 	getState,
// 	getFunFact,
// 	getCapital,
// 	getNickname,
// 	getPopulation,
// 	getAdmission,
// 	addFunFacts,
// 	updateFunFact,
// 	deleteFunFact
// }

const State = require('../models/State');
const data = require('../models/statesData.json');

const contigStates = ['AL','AZ','AR','CA','CO','CT','DE','FL','GA','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
const nonContigStates = ['AK', 'HI'];

const getAllStates = async (req, res) => {
	const contig = req.query.contig;
	let filteredStates = data;

	if (contig === 'true') {
		filteredStates = data.filter(state => contigStates.includes(state.code));
	} else if (contig === 'false') {
		filteredStates = data.filter(state => nonContigStates.includes(state.code));
	} else if (contig !== undefined) {
		return res.status(400).json({ message: 'Invalid query parameter. Use "true" or "false".' });
	}

	const stateFacts = await State.find();
	const result = filteredStates.map(state => {
		const facts = stateFacts.find(f => f.stateCode === state.code);
		return {
			...state,
			funfacts: facts?.funfacts || []
		};
	});

	res.json(result);
};

const getState = async (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}

	const stateFacts = await State.findOne({ stateCode });
	res.json({
		...state,
		funfacts: stateFacts?.funfacts || []
	});
};

const getFunFact = async (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}

	const stateFacts = await State.findOne({ stateCode });
	if (!stateFacts?.funfacts || stateFacts.funfacts.length === 0) {
		return res.json({ message: `No Fun Facts found for ${state.state}` });
	}

	const randomFact = stateFacts.funfacts[Math.floor(Math.random() * stateFacts.funfacts.length)];
	res.json({ funfact: randomFact });
};

const addFunFacts = async (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const { funfacts } = req.body;

	if (!Array.isArray(funfacts) || funfacts.length === 0) {
		return res.status(400).json({ message: 'Fun facts must be provided in an array.' });
	}

	const result = await State.findOneAndUpdate(
		{ stateCode },
		{ $push: { funfacts: { $each: funfacts } } },
		{ new: true, upsert: true }
	);

	res.json(result);
};

const updateFunFact = async (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const { index, funfact } = req.body;

	if (!index || !funfact) {
		return res.status(400).json({ message: 'Both index and funfact must be provided.' });
	}

	const state = await State.findOne({ stateCode });
	if (!state || !state.funfacts || index < 1 || index > state.funfacts.length) {
		return res.status(400).json({ message: `No Fun Fact found at that index for ${stateCode}` });
	}

	state.funfacts[index - 1] = funfact;
	await state.save();

	res.json(state);
};

const deleteFunFact = async (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const { index } = req.body;

	const state = await State.findOne({ stateCode });
	if (!state || !state.funfacts || index < 1 || index > state.funfacts.length) {
		return res.status(400).json({ message: `No Fun Fact found at that index for ${stateCode}` });
	}

	state.funfacts.splice(index - 1, 1);
	await state.save();

	res.json(state);
};

const getCapital = (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}
	res.json({ state: state.state, capital: state.capital_city });
};

const getNickname = (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}
	res.json({ state: state.state, nickname: state.nickname });
};

const getPopulation = (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}
	res.json({ state: state.state, population: state.population.toLocaleString() });
};

const getAdmission = (req, res) => {
	const stateCode = req.params.state.toUpperCase();
	const state = data.find(s => s.code === stateCode);
	if (!state) {
		return res.status(404).json({ message: 'Invalid state abbreviation parameter' });
	}
	res.json({ state: state.state, admitted: state.admission_date });
};

module.exports = {
	getAllStates,
	getState,
	getFunFact,
	getCapital,
	getNickname,
	getPopulation,
	getAdmission,
	addFunFacts,
	updateFunFact,
	deleteFunFact
};
