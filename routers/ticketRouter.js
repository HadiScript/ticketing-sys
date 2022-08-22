const express = require('express');
const {
    createTicket,
    gettingAllTickets,
    gettingAllPendingTickets,
    gettingAllConfirmedTickets,
    ticketById,
    deleteTicket,
    AddComment
} = require('../controllers/ticketCntrl');

const { admin, protect } = require('../middlewears/auth');
const router = express.Router()

router.post('/', protect, createTicket)
router.get('/all', protect, gettingAllTickets)
router.get('/pending', protect, gettingAllPendingTickets)
router.get('/confirmed', protect, gettingAllConfirmedTickets)

router.get('/:id', protect, ticketById)
router.delete('/:id', protect, deleteTicket)

router.put('/add-comments', protect, AddComment)



module.exports = router
