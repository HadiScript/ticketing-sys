const asyncHandler = require('express-async-handler')
const TicketModel = require('../models/TicketModel')

// create tickets
const createTicket = asyncHandler(async (req, res) => {

    console.log(req.user);

    const addingTc = new TicketModel({
        user: {
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email
        },
        state: req.body.state,
        city: req.body.city,
        country: req.body.country,



        problem: req.body.problem,
        description: req.body.description,
        image: req.body.image,

        category: req.body.category,

    });

    const newTc = await addingTc.save();

    if (newTc) {
        res.status(201).json(newTc)
    } else {
        res.status(505)
        throw new Error('server error')
    }


})

// getting all tickets
const gettingAllTickets = asyncHandler(async (req, res) => {
    const tcs = await TicketModel.find({})
    res.json(tcs)
})

const gettingAllPendingTickets = asyncHandler(async (req, res) => {
    const tcs = await TicketModel.find({})

    let pendingTcs = tcs.filter(x => x.pending === true)
    if (pendingTcs) {
        res.json(pendingTcs)
    } else {
        res.status(404)
        throw new Error('There is no any agents')
    }
})

const gettingAllConfirmedTickets = asyncHandler(async (req, res) => {
    const tcs = await TicketModel.find({})

    let confirmedTcs = tcs.filter(x => x.pending === true)
    if (confirmedTcs) {
        res.json(confirmedTcs)
    } else {
        res.status(404)
        throw new Error('There is no any agents')
    }
})

const ticketById = asyncHandler(async (req, res) => {
    const tc = await TicketModel.findById(req.params.id)

    if (tc) {
        res.json(tc)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})


const deleteTicket = asyncHandler(async (req, res) => {
    const tcs = await TicketModel.findById(req.params.id)

    if (tcs) {
        await tcs.remove()
        res.json({ message: 'Ticket removed !' })
    } else {
        res.status(404)
        throw new Error('Ticket not found')
    }
})


const AddComment = async (req, res) => {
    try {
        const { tcId, text } = req.body;
        const tc = await TicketModel.findByIdAndUpdate({ _id: tcId }, {
            $push: { privateComments: { text: text, postedBy: req.user._id } }
        },
            { new: true }
        ).populate('privateComments.postedBy', 'isAgent _id name ')
        console.log(tc, 'from comments')
        res.json(tc);

    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createTicket,
    gettingAllTickets,
    gettingAllPendingTickets,
    gettingAllConfirmedTickets,
    ticketById,
    deleteTicket,
    AddComment
}