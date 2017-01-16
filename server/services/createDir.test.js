var createDir=require('./makeDir');

const directory = '/home/arzoogupta/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const repoPath=directory.concat('/'+repoName);

var test=createDir(repoPath, (err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});