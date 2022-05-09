const express = require('express')
const expressOpenApi = require('express-openapi')
const axios = require('axios')
const operations = require('./paths/paths')
const bodyParser = require("body-parser")
const GENIUS_ACCESS_TOKEN = 'In1kGHzEuFgcbGnMkQd4g7EAxeOF1X5s_K4bNg1ssv5MCapdu_R2aAxM8DgkIJPY'
const cheerio = require('cheerio')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*axios.get('http://api.genius.com/search', {params: { q: "Testify Rage Against The Machine", access_token: GENIUS_ACCESS_TOKEN } }).then((data) => {
    console.log(data.data.response.hits[0])
}).catch(error => {
    console.log(error)
})*/

axios.get('https://genius.com/Rage-against-the-machine-testify-lyrics').then((data) => {
    //console.log(data.data)
    const $ = cheerio.load(data.data);
    //console.log($('div').text());
}).catch(error => {
    console.log(error)
})
let worlds = {
    Earth: {
        name: 'Earth'
    }
};
  
const worldsService = {
    getWorlds(name) {
        return worlds[name] ? [worlds[name]] : [];
    }
};

expressOpenApi.initialize({
    app,
    apiDoc: require('./api-doc'),
    dependencies: {
      worldsService: worldsService
    },
    paths: './paths/'
});

app.get('/', (req, res) => {
    axios.get('http://api_db:5000').then((data) => {
        console.log(data.data)
        res.send(200)
    }).catch(error => {
        console.log(error)
    })
})

app.listen(8080, () => {
    console.log("Slusam na portu 8080")
})