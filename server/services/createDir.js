var status;
var makeDir=function(repoPath,callback) {
        const spawn=require('child_process').spawn;
        //ls -lh /usr
        //const repository = 'akanksha152/tasker';
        //const repoName = repository.split('/')[1];
        const creDir=spawn('mkdir', [ repoPath]);
        console.log(repoPath);
        creDir.stderr.on('data', (data)=> {
             status=`${data}`;
             console.log(status);
             
    
        });

        creDir.stdout.on('data', (data)=> {
            status=`${data}`;
            console.log(status);

        
        });
        
        creDir.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('Create Directory exited with code', code)); return; }
            callback(null);
        });            
}
module.exports = makeDir;