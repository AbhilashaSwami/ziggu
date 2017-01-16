var ymlTojson=function(dockerComposeFileName,  callback){
    YAML = require('yamljs');
    filePath=dockerComposeFileName+'/docker-compose.yml';
    nativeObject = YAML.load(dockerComposeFileName);
    const yamlString = JSON.stringify(nativeObject);
    console.log('ymlTojson conversion done');
    
    callback(null, nativeObject);
}
module.exports =ymlTojson;