var pathCompose,path,fullPath;
var findCompose=function(repoPath, callback) {
        const spawn=require('child_process').spawn;
        //ls -lh /usr
        //const repository = 'akanksha152/tasker';
        //const repoName = repository.split('/')[1];
        const compose1=spawn('find', ['-name','docker-compose.yml'], {cwd:repoPath});//find . -name docker-compose.yml

       compose1.stdout.on('data', (data)=> {
            pathCompose=`${data}`;
            pathCompose = pathCompose.replace('\n','');
            console.log('pathCompose:' +pathCompose+ ':end');
            path=repoPath.concat(pathCompose.replace('.',''));
            //console.log(path);
            //path=JSON.parse(path);
            //fullPath=path
          
        });

       compose1.on('close', (code) => {
           // console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('git clone exited with code', code)); return; }
          //  console.log(path);
            callback(null,path);
        });
}
module.exports = findCompose;