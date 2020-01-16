const express = require('express');
const mongoose = require('mongoose');

const app = express();

// mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-a549y.mongodb.net/omnistack?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connect('mongodb://localhost:27017/omnistack', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// request.query 
// request.param

app.post('/user', (request, response) => {
    console.log(request.body);
    return response.json({ message: request.body.teste });
});

app.listen(3333);