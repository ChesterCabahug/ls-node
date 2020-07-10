const fs = require("fs")

fs.readdir(".", (err, filenames) => {
    // either 
    // err === an error object, which means something went wrong
    // or 
    // err === null, which means everything is ok
    if(err){
        // error handling code here
        console.log(err)
    }

    console.log(filenames)
})