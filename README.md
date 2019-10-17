
# TIC TAC TOE

This is a simple Tic Tac Toe game.

## THE WAY THIS WORKS
The game starts with two players, player X and player O.

Player X starts. The players take turns until there is a winner or a draw.

### A DRAW
If there is a draw, the reset button appears without any celebrations.

### A WINNER
If there is a winner, a javascript confetti script loads (yahhhhh) and a modal pops up to announce the winner. Click on the 'x' of the modal and the modal announcement disappears.

At that point the 'reset' button appears.

Click on the 'reset' and you are ready to go again.

 The number of wins each player are kept until you refresh your browser.

 ## TECHNOLOGIES USED
 A combination of HTML, CSS and JavaScript files were used.

 For CSS, normalizes and reset css files were used to clean up any browser default formatting.

 A jQuery file (jquery-1.7.2.js) is used to access jQuery DOM selectors.

 The modal css and javascript files have been kept in separate files to make it easy to include or exclude without risk of damaging other code.

 The line in ui.js to include/exclude the modal is lines 37 & 38 to appear and lines 47 to 51 to hide.

 The JavaScript confetti code is kindly provided by github account [mathusummut.]( https://github.com/mathusummut/confetti.js)
Copyright for this is recognised at the top of the confetti.js file.

 ## INSTALLATION INSTRUCTIONS
 To play the game, [click here.](https://swcreative.github.io/project0/)

 Enjoy!

 ### UNSOLVED PROBLEMS...(or features to consider adding).
 The board does not count the number of draws.
 The board cannot be played online as multi-players.
 I think the logic would have worked better if I gave co-ordinates to each square, instead of fixed positions.

 ### LOGIC APPLIED
 Each turn is kept in an array.
 The different winning combinations are stored in an object.
 Each winning combination that is relevant to each square is kept is a separate object.
 When you take a turn, the logic determines if the letter (either X or O) applied to that square can also be found in the winning combination squares that relate to the played square. If so, then you are the winner.

 ## MEDIUM ARTICLE
If you made it this far, I also wrote a [Medium article](https://medium.com/@scottw2508/what-two-days-at-a-coding-bootcamp-feels-like-a3371441d5eb) on the process.
