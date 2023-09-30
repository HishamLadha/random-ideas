const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        // write a unique interesting idea here '
        text: 'Milk cartons that turn a different color when the milk is bad',
        tag: 'Invention',
        username: 'billybob',
        date: new Date().toJSON().slice(0,10),
    },
    {
        id: 2,
        // write a unique interesting idea here '
        text: 'Plastic water bottles that melt into the ground after 1 week',
        tag: 'Invention',
        username: 'tommyboy',
        date: new Date().toJSON().slice(0,10),
    },
    {
        id: 3,
        // write a unique interesting idea here '
        text: 'New planet that supplies earth with unlimited resources',
        tag: 'Space',
        username: 'queenbee',
        date: new Date().toJSON().slice(0,10),
    },
    {
        id: 4,
        // write a unique interesting idea here '
        text: 'A new type of car that runs on water',
        tag: 'Cars',
        username: 'unclejoe',
        date: new Date().toJSON().slice(0,10),
    }
];

// Get all ideas
router.get('/', (req, res) => {
    res.json({ success: true, data: ideas});
});

// Get single idea
router.get('/:id', (req, res) => {
    const idea = ideas.find((idea) => {
        return idea.id === +req.params.id;
    });
    if(!idea) {
        return res.status(404).json({ success: false, error: 'Resource not found'});
    }

    res.json({ success: true, data: idea});

});


module.exports = router;