console.log("JS UI connected");



$(document).ready( function () {

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
      }

      // run logic functions
      // yourTurn is the letter and square array position of your go
      const yourTurn = activeLetter + activeSquare;
      // process yourTurn in the logic functions
      ticTac.position ( yourTurn );

      if ( status === "win") {
        $('#winStatement').text(`${ activeLetter } won this round`);
        $('#reset').css('visibility', 'visible');

      }

      // now need to switch the activeLetter
      if (activeLetter === "X") {
        // console.log("change letter");
        activeLetter = "O";
      } else {
        activeLetter = "X";
      }
    }) // end of 'on.('click')' function

    // need to reset the game ///////////
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
      activeLetter = "X";
      status = "active";
      ticTac.moves.length = 0;
      $('#reset').css('visibility', 'hidden');

    })
})
