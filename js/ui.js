console.log("JS UI connected");

$(document).ready( function () {
    // set the first letter to use as an 'X'
    let activeLetter = "X";

    let status = "active";

    let winner = "";

if ( status === "active" ) {
    // when someone clicks a square
    $('.square').on('click', function() {
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
      // console.log( );
      const yourTurn = activeLetter + activeSquare;
      // console.log( yourTurn );
      ticTac.position ( yourTurn )

      // now need to switch the activeLetter
      if (activeLetter === "X") {
        // console.log("change letter");
        activeLetter = "O";
      } else {
        activeLetter = "X";
      }
    }) // end of 'on.('click')' function
  }
  if ( status === "win" ) {
      $('.square').on('click', function() {
        alert(`Game over ${ winner } won.`)
      })
    } // end of IF statement


})
