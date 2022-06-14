const router = require('express').Router();
const animalsRoutes = require('../apiRoutes/animalRoutes');


router.use(animalsRoutes);


module.exports = router;