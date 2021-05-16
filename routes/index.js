const express = require('express');
const router = express.Router();
const data = require('../data.json');
const baseUrl = require('../config.js');
const fs = require('fs');


// Random number
const ran = (num = 10) => Math.floor(Math.random() * num);


// Grab random array item at random index
const rando = arr => arr[Math.floor(Math.random() * arr.length)];


// Get date within range for any month
const getDay = month => {

  // No more than 28 days for February
  if (month === 02) {
    return rando(data.numbers.slice(0, 28));
  }
  
  // No more than 30 days for even months with 30 days
  if (month < 7 && month % 2 === 0) {
    return rando(data.numbers.slice(0, 31));
  }

  // No more than 30 days for odd months with 30 days
  if (month > 8 && month % 2 !== 0) {
    return rando(data.numbers.slice(0, 31));
  }

  // Months with 31 days
  return rando(data.numbers);
};


// Build unique userName
const getUserName = () => {

  // Roll twelve sided die for randomness
  const dieRoll = Math.ceil(Math.random() * 12);

  // Base username
  let userName = rando(data.emails.usernames);

  // Add two numbers to end of userName
  if (dieRoll > 2 && dieRoll < 9) {
    userName += rando(data.numbers);
  }

  // Add four numbers to end of userName
  if (dieRoll > 8) {
    userName += rando(data.years);
  }

  return userName;
}


// Image folders
const imgFolders = ['cools', 'cuties', 'murray', 'starwars', 'supers'];


// Helper function for getting the number of files in a folder
const fileCount = dir => fs.readdirSync(`./public/images/${dir}`).length;


// Helper function for creating a user object
const generateUser = (dir = rando(imgFolders)) => {

  // Handle non existent image 
  if (dir && !imgFolders.includes(dir)) {
    dir = rando(imgFolders);
  }

  // Build multi-step values
  const userName = getUserName();
  const email = `${userName}@${rando(data.emails.domains)}${rando(data.emails.extensions)}`;
  const month = rando(data.numbers.slice(0, 12));
  const day = getDay(month);
  const date = `${rando(data.years)}-${month}-${day}`
  const profilePic = `${baseUrl}/images/${dir}/${ran(fileCount(dir))}.jpg`;

  // API User Schema
  return {
		"name": {
			"first": rando(data.names.firsts),
			"last": rando(data.names.lasts)
		},
    "email": email,
    "cell": `(503) 555-${ran(10)}${ran(10)}${ran(10)}${ran(10)}`,
    "phone": `(503) 555-${ran(10)}${ran(10)}${ran(10)}${ran(10)}`,
    "location": {
      "street": {
        "number": `${rando(data.addresses.streets.numbers)}`,
        "name": `${rando(data.addresses.streets.names)} ${rando(data.addresses.streets.suffixes)}`
      },
      "city": rando(data.addresses.cities),
      "state": rando(data.addresses.states),
      "postcode": rando(data.addresses.zipcodes)
    },
    "dob": {
      "date": date
    },
		"picture": {
      "large": profilePic,
			"medium": profilePic,
			"thumbnail": profilePic
    }
	}
}


// Create array of users
const getArrOfUsers = (count = 12, theme) => {
  const users = [];
  for (let i = 0, j = count; i < j; i++) {
    users.push(generateUser(theme));
  }
  return users;
}


/* GET - home '/api' route - return JSON for twelve random users */
router.get('/', async(req, res, next) => {
  let count = 12; console.log(req.query);
  let theme;

  if (req.query?.count) {
    count = req.query.count;
  }

  if (req.query?.theme) {
    theme = req.query.theme;
  }

  try {
    const arrOfUsers = { results: getArrOfUsers(count, theme) };
    res.header({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    res.send(JSON.stringify(arrOfUsers, null, 4));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
