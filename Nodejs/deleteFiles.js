const fs = require('fs')

fs.unlink('theNewOne2.txt', function(err, file) {
    if(err) throw err
    console.log('deleted!!')
})