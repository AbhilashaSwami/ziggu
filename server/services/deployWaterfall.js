
const async = require('async');
const clone = require('./clone');
const compose = require('./compose');
const createDir = require('./createDir');
const checkOut = require('./checkOut');
const findCompose = require('./findCompose');
const ymlTojson =require('./ymlTojson');
const jsonToyml =require('./jsonToyml');

const directory = '/home/ebin/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const repoPath=directory.concat('/'+Math.floor(Math.random()*18371));
const branchName = 'docker-integration';
var path,pathCompose;

 async.waterfall([
    // TODO: Change RMDIR to MKDIR
    createDir.bind(null,repoPath),
    // TODO: Clone a repository
    clone.bind(null, repoPath, repository),
    // TODO: Checkout required branch
    checkOut.bind(null,repoPath,branchName),
    // TODO: find docker-compose.yml file with command "find . -name docker-compose.yml"
    findCompose.bind(null, repoPath),
    ymlTojson.bind(null),
    jsonToyml.bind(null)
   // compose.bind(null,repoPath)
    
  
  ], (err, results) => {
    if(err) { console.error('Deploy Failed with error', err); return; }
    console.log('deploy successfully');
  });
