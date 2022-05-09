var fs = require('fs'); 
var { parse } = require('csv-parse');
var axios = require('axios')
var parser = parse({columns: true}, function (err, records) {
	records = records[0]
	const allowed = ["id", "name", "album", "artists", "release_date"]
	const filtered = Object.keys(records)
	.filter(key => allowed.includes(key))
	.reduce((obj, key) => {
		if(key === "artists"){
			records[key] = records[key].replaceAll('\'', '\"')
			records[key] = JSON.parse(records[key])
		}
		obj[key] = records[key]
		return obj
	}, {});
	console.log(filtered)
	axios.post('http://localhost:8081/song', filtered).then((data) => {
        console.log(data.data)
    }).catch(error => {
        console.log(error)
    })
});
fs.createReadStream("../../../tracks_features.csv").pipe(parser);