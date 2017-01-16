var checkOut=require('./checkOut');

const directory = '/home/arzoogupta/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const branchName = 'docker-integration';
const repoPath=directory.concat('/'+repoName);

var test=checkOut(repoPath,branchName,(err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});
