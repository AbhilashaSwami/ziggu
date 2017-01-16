const async = require('async');

const clone = require('./clone');
const compose = require('./compose');
const removeDir = require('./removeDir');
const checkOut = require('./checkOut');
const findCompose = require('./findCompose');

const directory = '/home/arzoogupta/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const branchName = 'docker-integration';
const repoPath=directory.concat('/'+Math.floor(Math.random()*18371));

async.series([
        // TODO: Execute rmdir command
        removeDir.bind(null,repoPath),
        //TODO: Clone a repository
        clone.bind(null, repoPath, repository),
        // TODO: Checkout required branch
        checkOut.bind(null,repoPath,branchName),

        // TODO: find docker-compose.yml file with command "find . -name docker-compose.yml"
        findCompose.bind(null,repoPath),
        //TODO: compose the docker-compose.yml file
        compose.bind(null, repoPath)
    ], (err, results) => {
        if(err) { console.error('Deploy Failed with error', err); return; }
        console.log('deploy successfully');

});