var player1 = prompt("Player One: Enter Your Name , you will be Blue");
var player1Color = 'rgb(86, 151, 255)';

var player2 = prompt("Player Two: Enter Your Name, you will be Red");
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table = $('tr');

function reportWin(rowNum,colNum) {
    console.log("You won starting at this row,col");
    console.log(rowNum);
    console.log(colNum);
}

function changeColor(row, column, color){
    return table.eq(row).find("td").eq(column).find("button").css("background-color", color)
}

function returnColor(row, column){
    return table.eq(row).find("td").eq(column).find("button").css("background-color")
}

function checkBottom(col) {
    for (var row = 5; row >= 0; row--){
        if (returnColor(row, col) == "rgb(128, 128, 128)"){
            return row
        }
    }
  }

// Check to see if 4 inputs are the same color
function colorMatchCheck(one,two,three,four){
    return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
  }
  
  // Check for Horizontal Wins
  function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  // Check for Vertical Wins
  function verticalWinCheck() {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 3; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
          console.log('vertical');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  // Check for Diagonal Wins
  function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
          console.log('diag');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }

var curPly = 1
var curColor = player1Color
var curName = player1
var statuss = "play"

$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

    var col = $(this).closest("td").index();
    var rowAvail = checkBottom(col);
    changeColor(rowAvail, col, curColor)
    
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        statuss = "end"
        for (var col = 0; col < 7; col++) {
            for (var row = 0; row < 7; row++) {
              $('h3').fadeOut('fast');
              $('h2').fadeOut('fast');
              $('h1').text(curName+" has won! Refresh your browser to play again!").css("fontSize", "50px")
            }
          }
    }

    curPly *= -1
    if (curPly == 1){
        curColor = player1Color
        curName = player1
        $('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");
    }
    else if (curPly == -1){
        curColor = player2Color
        curName = player2
        $('h3').text(player2+": it is your turn, please pick a column to drop your red chip.");
    }
    
})
