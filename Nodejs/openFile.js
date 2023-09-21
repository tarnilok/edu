const fs = require('fs')

fs.open('theNewOne2.txt', 'w', function(err, file) {
    if(err) throw err
    console.log('saved!!!')
})