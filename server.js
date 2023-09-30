const express = require('express');

const app = express();

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
]

app.get('/', (req, res) => {
  res.send('Welcome to the Random Ideas API!');
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(3000, () => console.log('Server running on port 3000'));