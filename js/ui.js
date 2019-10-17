console.log("JS UI connected");

$(document).ready( function () {

    // welcome message
    $('#player').text(`${ startPlayer} goes first. Good luck.`)

    // if they are continuing their play, load localStorage scores into scores, else start with 0 for each player
    $('#scoreX').text( localStorage.getItem("X") || 0);
    $('#scoreO').text( localStorage.getItem("O") || 0);

    // IF YOU CLICK THE CLEAR Button
    // clear scores from localstorage
    // updates score boxes
    $('#clear-button').on('click', function() {
      localStorage.clear(); // this clears all - which includes X and O scores
      // update scores on page
      localStorage.setItem("X", 0);
      localStorage.setItem("O", 0);
      $('#scoreX').text( localStorage.getItem("X") || 0 );
      $('#scoreO').text( localStorage.getItem("O") ||0 );
    });

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
        $('#player').text(`${ activeLetter } won this round`);

        $('#player').css('visibility', 'hidden');

        // update the score table
        // $('#scoreX').text(`${ counterX }`); /// old
        $('#scoreX').text( localStorage.getItem("X") || 0 );
        // $('#scoreO').text(`${ counterO }`);
        $('#scoreO').text( localStorage.getItem("O") || 0 ); /// old
      }
      // after WIN, need to clear modal and activate reset
      $('#myModal').on('click', function () {
          // if ( display = $('#myModal').css('display')) {
            $('#myModal').css('display', 'none')

            // show reset button
            $('#reset').css('visibility', 'visible');

            // stop the confetti
            confetti.stop();
        })

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

      // flips the squares on reset
      $('.square').addClass('rotate-center');

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
      $('#player').css('visibility', 'visible');

      $('#player').text(`'${ startPlayer }' goes first. Good luck.`)

    }) // end of reset

})
