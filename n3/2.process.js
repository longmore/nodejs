


//console.log(process);
//console.log(process.cwd());

process.stdin.setEncoding('utf-8');
process.stdin.on('data', function (data) {
    // \r->0d ; \n->0a
    if (data == 'exit\n') {
        process.exit();
    }
    console.log(data);
});

//console.log(process.cwd());
//console.log(__dirname);
//process.chdir('..');
//console.log(process.cwd());
//console.log(__dirname);

