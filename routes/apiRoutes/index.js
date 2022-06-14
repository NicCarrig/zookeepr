const router = require('express').Router();
const animalsRoutes = require('../apiRoutes/animalRoutes');
// const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');


router.use(animalsRoutes);
router.use(require('./zookeeperRoutes'));


module.exports = router;