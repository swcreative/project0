console.log("JS UI connected");

$(document).ready( function () {

    $('#player').text(`${ startPlayer} goes first. Good luck.`)

    // when someone clicks a square
    $('.square').on('click', function() {
      if ( status === "win") {
        return;
      } // else do the below


      console.log("I got clicked");
      // console.log( $(this).attr('id') );
      const activeSquare = $(this).attr('id');


      // If a square is not empty, write the activeLetter in square
      if ( $(this).text() === "" ){ // determine if square is empty
        // if square is not empty, place the activeLetter in the square
        $(this).text(activeLetter);
        console.log( activeLetter );
      } else {
        event.preventDefault();
        return; // need to not allow click anywhere else
      }

      // run logic functions
      // yourTurn is the letter and square array position of your go
      const yourTurn = activeLetter + activeSquare;
      // process yourTurn in the logic functions
      ticTac.position ( yourTurn );

      // WIN /////////////
      if ( status === "win") {
        $('#myModal').css('display', 'block'); // trigger the modal
        $('.modal-content p').text(`${ activeLetter } won this round`);
        confetti.start();
        $('#player').addClass('winannounce');
        // announce who won the round
        $('#player').text(`${ activeLetter } won this round`);
        // update the score table
        $('#scoreX').text(`${ counterX }`);
        $('#scoreO').text(`${ counterO }`);
        // reset the board
        $('#reset').css('visibility', 'visible');
      }

      // DRAW /////////////
      if (status === "draw") {
        // announce no winner
        $('#player').text(`Nobody won this round`);
        // reset the board
        $('#reset').css('visibility', 'visible');
      }

      // if game is continuing, now need to switch the active player
      if (activeLetter === "X") {
        // console.log("change letter");
        activeLetter = "O";
      } else {
        activeLetter = "X";
      }

      // Unless there is a winner, announce who the next player is
       if (status === "active") {
      $('#player').text(`Your turn player ${ activeLetter }`)
      }

    }) // end of 'on.('click')' function

    // reset the game button ///////////
    $('#reset').on('click', function() {
      $('#0').text("");
      $('#1').text("");
      $('#2').text("");
      $('#3').text("");
      $('#4').text("");
      $('#5').text("");
      $('#6').text("");
      $('#7').text("");
      $('#8').text("");
      $('#winStatement').text("");

      confetti.stop();

      $('#player').removeClass('winannounce');
      // activeLetter = startPlayer;
      status = "active";
      ticTac.moves = ["","","","","","","","",""];
      $('#reset').css('visibility', 'hidden');
      if (startPlayer === "X") {
        startPlayer = "O";
      } else {
        startPlayer = "X";
      }
      activeLetter = startPlayer;
      $('#player').text(`'${ startPlayer }' goes first. Good luck.`)

    }) // end of reset

})
