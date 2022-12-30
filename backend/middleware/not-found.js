//add not page found
 
const notFound = (req,res) => res.status(400).send('Route soes not exist');

module.exports = notFound