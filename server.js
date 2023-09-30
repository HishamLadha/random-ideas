const express = require('express');

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  res.send('Welcome to the Random Ideas API!');
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(3000, () => console.log('Server running on port 3000'));