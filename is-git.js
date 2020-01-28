const path = require('path');
const dirExists = require('directory-exists');
const chalk =  require("chalk");


function abc(relativePath) {
    const args = process.argv[2]
    const git = '.git'
    relativePath = args
    let myPath = path.resolve(relativePath)
    let gitPath = path.join(myPath, git)

    dirExists(myPath, (error, result) => {
        if (result) {
            dirExists(gitPath, (error, result) =>{
                if(result){
                    console.log(chalk.blue('es gibt git'))
                }else if (!result){
                    console.log(chalk.red('es gibt kein git'))

                }
            } )
            }else{
                console.log(chalk.yellow('es gibt kein ordner'))

            }
        })
    
}

module.exports = abc