var inquirer = require('inquirer');
var chalk = require('chalk');

var arrayOfSquares = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var intAnswer = 0
var count = 0
var x = chalk.blue.bold('X')
var o = chalk.red.bold('O')
var tie = chalk.cyan.bold('Tie. Game Over!')
var strBoard = 'The board state.'
var samePlace = 'That spot is occupied by '
var debugPrint = '0'
var tryAgain = '. Try Again.'
var player1Wins = chalk.blue.bold('Player 1 Wins!')
var player2Wins = chalk.red.bold('Player 2 Wins!')

var draw = () => {
    console.log(strBoard)
    console.log( arrayOfSquares[0] + ' ' + arrayOfSquares[1] + ' ' + arrayOfSquares[2] + ' \n' +
                arrayOfSquares[3] + ' ' + arrayOfSquares[4] + ' ' + arrayOfSquares[5] + ' \n' +
                arrayOfSquares[6] + ' ' + arrayOfSquares[7] + ' ' + arrayOfSquares[8] + ' \n' )
}

var Player1 = () => {
            draw()
            if (count < 9){
                inquirer.prompt([{
                    type: 'list',
                    name: 'answer',
                    message: `Player 1: Pick your X spot.`,
                    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                }]).then((list) => {
                        intAnswer = parseInt(list.answer)
                        debugPrint = arrayOfSquares[intAnswer - 1]
                        if (arrayOfSquares[intAnswer - 1] === x){
                            console.log(samePlace + debugPrint + tryAgain)
                            Player1()
                        }else if(arrayOfSquares[intAnswer - 1] === o){
                            console.log(samePlace + debugPrint + tryAgain)
                            Player1()
                        }
                        else{
                            arrayOfSquares[intAnswer - 1] = x
                                winCheckPlayer1()
                                count++
                                Player2()
                        }
                })
            }else {
                    console.log(tie)
                }
         }

var Player2 = () => {
            draw()
            if (count < 9){
                inquirer.prompt([{
                    type: 'list',
                    name: 'answer',
                    message: `Player 2: Pick your O spot.`,
                    choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                }]).then((list) => {
                        intAnswer = parseInt(list.answer)
                        debugPrint = arrayOfSquares[intAnswer - 1]
                        if (arrayOfSquares[intAnswer - 1] === x){
                            console.log(samePlace + debugPrint + tryAgain)
                            Player2()
                        }else if(arrayOfSquares[intAnswer - 1] === o){
                            console.log(samePlace + debugPrint + tryAgain)
                            Player2()
                        }
                        else{
                            arrayOfSquares[intAnswer - 1] = o
                                    winCheckPlayer2()
                                    count++
                                    Player1()
                        }
                })
            }else {
                    console.log(tie)
                }
         }

var winCheckPlayer1 = () => {
    //Common center point
    if (arrayOfSquares[4] === x){
        //2nd row across
        if (arrayOfSquares[3] === x && arrayOfSquares[5] === x){
            draw()
            console.log(player1Wins)
                process.exit()
        }
        //2nd column down
        else if (arrayOfSquares[1] === x && arrayOfSquares[7] === x){
            draw()
            console.log(player1Wins)
                process.exit()
        }
        //descending diagonal
        if (arrayOfSquares[0] === x && arrayOfSquares[8] === x){
            draw()
            console.log(player1Wins)
                process.exit()
            }
        
        //ascending diagonal
        if (arrayOfSquares[2] === x && arrayOfSquares[6] === x){
            draw()
            console.log(player1Wins)
                process.exit()
            }
    }       
    //Top left common point
    else if (arrayOfSquares[0] === x){
        //1st column down
        if (arrayOfSquares[3] === x && arrayOfSquares[6] === x){
            draw()
            console.log(player1Wins)
                process.exit()
        }
        //1rd row across
        else if (arrayOfSquares[1] === x && arrayOfSquares[2] === x){
            draw()
            console.log(player1Wins)
                process.exit()
            }
        }
    //3rd column down
    else if (arrayOfSquares[2] === x){
        if (arrayOfSquares[5] === x && arrayOfSquares[8] === x){
            draw()
            console.log(player1Wins)
                process.exit()
        }
    }
    //3rd row down
    else if (arrayOfSquares[6] === x){
        if (arrayOfSquares[7] === x && arrayOfSquares[8] === x){
            draw()
            console.log(player1Wins)
                process.exit()
        }
    }
}

var winCheckPlayer2 = () => {
    //Common center point
    if (arrayOfSquares[4] === o){
        //2nd row across
        if (arrayOfSquares[3] === o && arrayOfSquares[5] === o){
            draw()
            console.log(player2Wins)
                process.exit()
        }
        //2nd column down
        else if (arrayOfSquares[1] === o && arrayOfSquares[7] === o){
            draw()
            console.log(player2Wins)
                process.exit()
        }
        //descending diagonal
        else if (arrayOfSquares[0] === o && arrayOfSquares[8] === o){
            draw()
            console.log(player2Wins)
                process.exit()
            }
        //ascending diagonal
        if (arrayOfSquares[2] === o && arrayOfSquares[6] === o){
            draw()
            console.log(player2Wins)
                process.exit()
            }
    }       
    //Top left common point
    else if (arrayOfSquares[0] === o){
        //1st column down
        if (arrayOfSquares[3] === o && arrayOfSquares[6] === o){
            draw()
            console.log(player2Wins)
                process.exit()
        }
        //1rd row across
        else if (arrayOfSquares[1] === o && arrayOfSquares[2] === o){
            draw()
            console.log(player2Wins)
                process.exit()
            }
        }
    //3rd column down
    else if (arrayOfSquares[2] === o){
        if (arrayOfSquares[5] === o && arrayOfSquares[8] === o){
            draw()
            console.log(player2Wins)
                process.exit()
        }
    }
    //3rd row down
    else if (arrayOfSquares[6] === o){
        if (arrayOfSquares[7] === o && arrayOfSquares[8] === o){
            draw()
            console.log(player2Wins)
                process.exit()
        }
    }
}

var Play = () => {
    Player1()
}

Play();