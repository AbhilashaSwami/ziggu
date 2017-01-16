var status;
var dockerCompose=function(folderPath, callback) {
        const spawn=require('child_process').spawn;
        const path = require('path');
        //ls -lh /usr

        const dockerCompose1=spawn('docker-compose', ['up','-d'], {cwd:folderPath});

        dockerCompose1.stderr.on('data', (data)=> {
             status=`${data}`;
            // console.log(`${data}`);

        });

        dockerCompose1.stdout.on('data', (data)=> {
            status="Sucess";
           // console.log(`${data}`);
        });

        dockerCompose1.on('close', (code) => {
            console.log(`Status:${code}`);
            if(code !== 0) { callback(new Error('"docker-compose up" exited with code', code)); return; }
            callback(null,'ok');
        });
}
module.exports = dockerCompose;