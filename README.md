
# TIC TAC TOE

This is a simple Tic Tac Toe game.
This was created as an assignment as part of the General Assembly Software Engineering Immersive course (2019).

## THE WAY THIS WORKS
The game starts with two players, player X and player O.

Player X starts. The players take turns until there is a winner or a draw.

### A DRAW
If there is a draw, the reset button appears without any celebrations.

### A WINNER
If there is a winner, a javascript confetti script loads (yahhhhh) and a modal pops up to announce the winner. Click on the 'x' of the modal and the modal announcement disappears.

At that point the 'reset' button appears.

Click on the 'reset' and you are ready to go again.

The number of wins each player are kept in your browser storage. You must either click 'Clear Scores' or close your browser window to reset the scores.

## TECHNOLOGIES USED
- html
- css
- JavaScript
- jquery (jquery-1.7.2.js)
- LocalStorage

Localstorage is used to keep the scores locally. This is especially important if you navigate to help screen and then return to the main screen.

For CSS, normalizes and reset css files were used to clean up any browser default formatting.

A jQuery file (jquery-1.7.2.js) is used to access jQuery DOM selectors.

The modal javascript and project javascript files have been kept in separate files to keep integrity with the modal file used. It also makes it easy to remove the modal code.

The line in ui.js to include/exclude the modal is lines 37 & 38 to appear and lines 47 to 51 to hide.

The JavaScript confetti code is kindly provided by github account [mathusummut.]( https://github.com/mathusummut/confetti.js)
Copyright for this is recognised at the top of the confetti.js file.

The square flip CSS animations generated with Animista.net is provided by Animista free for personal and commercial usage and is licensed under FreeBSD license.

## INSTALLATION INSTRUCTIONS
To play the game, [click here.](https://swcreative.github.io/project0/)

Or select the QR code:

![QR Code](QRcode-TicTacToe.png)

Enjoy!

### UNSOLVED PROBLEMS...(or features to consider adding).
The board does not count the number of draws.
The board cannot be played online as multi-players.
At reset, the squares rotate and clear. The rotation animation currently does not work on iPhone.
The localstorage only holds the scores. If you are half way through your game and click on the 'how to play', you keep your scores but lose the current game in progress.
I think the logic would have worked better if I gave co-ordinates to each square, instead of fixed positions.

### LOGIC APPLIED
Each turn is kept in an array.
The different winning combinations are stored in an object.
Each winning combination that is relevant to each square is kept is a separate object.
When you take a turn, the logic determines if the letter (either X or O) applied to that square can also be found in the winning combination squares that relate to the played square. If so, then you are the winner.

## SCREEN SHOT of GAME
![screen shot](https://github.com/swcreative/project0/blob/master/Tic%20Tac%20Screen%20Shot.png) This shows the graphics of the game as at Oct 2019.

## Is It Finished?
Is anything ever truly finished?

>A manager asked a programmer how long it would take him to finish the program on which he was working. ``It will be finished tomorrow`` the programmer promptly replied.
>
>``I think you are being unrealistic,`` said the manager, ``Truthfully, how long will it take?``
>
>The programmer thought for a moment. `I have some features that I wish to add. This will take at least two weeks,` he finally said.
>
>`Even that is too much to expect,` insisted the manager, `I will be satisfied if you simply tell me when the program is complete.`
>
>The programmer agreed to this.
>
>Several years later, the manager retired. On the way to his retirement luncheon, he discovered the programmer asleep at his terminal. He had been programming all night.
>
> **- Book 5, verse 2: The Tao of Programming**
