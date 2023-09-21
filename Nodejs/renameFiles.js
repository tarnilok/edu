const fs = require('fs')

fs.rename('theNewOne2.txt', 'theNewOne333.txt', function(err, file) {
    if(err) throw err
    console.log('saved!!!')
})