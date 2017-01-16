var gitclone =require('./clone');
const directory = '/home/arzoogupta/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
const branchName = 'docker-integration';
const repoPath=directory.concat('/'+repoName);

var test=gitclone(repoPath,repository, (err, dir) => {
    if(err){console.log(err)}

    else{ var dir1= dir;
        console.log(dir);}
});
