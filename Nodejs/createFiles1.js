const fs = require('fs')

fs.appendFile('theNewOne1.txt', 'hello content!', function(err) {
    if(err) throw err
    console.log('saved!')
})