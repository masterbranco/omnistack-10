const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
// const axios = require('axios');
// const Dev = require('./models/Dev');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
console.log('565665165156');
// routes.post('/devs', function(request, response) {
//     DevController.store;
// });

routes.get('/search', SearchController.index);

module.exports = routes;

// routes.post('/users', async(request, response) => {
//     const { github_username, techs } = request.body;
//     const apiResponse = await axios.get('https://api.github.com/users/' + github_username);
//     const { name = login, avatar_url, bio } = apiResponse.data;
//     const techsArray = techs.split(',').map(tech => techs.trim());

//     const dev = await Dev.create({
//         github_username,
//         name,
//         avatar_url,
//         bio,
//         techs: techsArray,
//     });

//     console.log(request.body);
//     return response.json(apiResponse.data);
// });