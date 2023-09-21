const fs = require('fs')

fs.writeFile('theNewOne2.txt', 'hello content2', function(err, file) {
    if(err) throw err
    console.log('saved!!!')
})