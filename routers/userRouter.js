const express = require('express')
const { getUsers, updateUser, getUserById, getAllAgents } = require('../controllers/userCntrl');

const { admin, protect } = require('../middlewears/auth');
const router = express.Router()

router.get('/', protect, admin, getUsers)
router.get('/agents', protect, admin, getAllAgents)
router.put('/:id', protect, admin, updateUser)
router.get('/:id', protect, admin, getUserById)


// router.route('/').get(protect, admin, getUsers)
// router
//     .route('/profile')
//     .get(protect, getUserProfile)
//     .put(protect, updateUserProfile)
// router
//     .route('/:id')
//     .delete(protect, admin, deleteUser)
// .get(protect, admin, getUserById)
// .put(protect, admin, updateUser)


module.exports = router
