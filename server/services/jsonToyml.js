var jsonToyml=function(jsonFilename,Directory,callback){
    YAML = require('yamljs');
    const fs = require('fs');
    const yamlString = YAML.stringify(jsonFilename, 4);
    console.log("jsonToyml is done");
    console.log(Directory);
    fs.writeFile(Directory.concat('/')+'docker-compose.yml', yamlString, function (err) {
  		 if (err)
     		return console.log(err);
// console.log(jsonString);
			});
    callback(null);
}
module.exports= jsonToyml