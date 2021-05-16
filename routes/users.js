const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

// async function* asyncGenerator() {
//   let i = 0;
//   while (i < 10) {
//     yield i++;
//   }
// }

// const grabImages = async () => {

//   for await (let num of asyncGenerator()) {
//     const img = await fetch('https://www.fillmurray.com/100/100')
//     .then(res => {
//       const dest = fs.createWriteStream(`./public/images/murray${num}.png`);
//       res.body.pipe(dest);
//       //console.log('TEST', res, dest);
//     });
//     console.log(num);
//   }
// }

// grabImages();
