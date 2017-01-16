var dockerCompose=require('./compose');

const directory = '/home/arzoogupta/Documents/projectZiggurate/ziggurate-v2/server/services';
const repository = 'akanksha152/tasker';
const repoName = repository.split('/')[1];
var test=dockerCompose(directory.concat('/'+repoName), (err, dir) => {
    if(err){console.log(err)}

    else{console.log(dir);}
});
