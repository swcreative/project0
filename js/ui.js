console.log("JS UI connected");

$(document).ready( function () {

//start with a letter X
  let activeLetter = "X";

  const grid = {
    row1: ["1", "2", "3"],
    row2: ["4", "5", "6"],
    row3: ["7", "8", "9"],
    col1: ["1", "4", "7"],
    col2: ["2", "5", "8"],
    col3: ["3", "6", "9"],
    dia1: ["1", "5", "9"],
    dia2: ["3", "5", "7"]
  }



  $('.square').on('click', function() {
    console.log("I got clicked");
    // console.log( $(this).attr('id') );
    const activeSquare = $(this).attr('id');

    // If a square is not empty
    if ( $(this).text() === "" ){ // determine if square is empty
      // if square is not empty, place the activeLetter in the square
      $(this).text(activeLetter);
      // now need to switch the activeLetter
      if (activeLetter === "X") {
        activeLetter = "O";
      } else {
        activeLetter = "X";
      }
    } else {
      event.preventDefault();
    }

    // for ( let key in grid) {
      // console.log("activesquare: ", activeSquare);
      // console.log( grid.row1.includes(activeSquare) );
      if (grid.row1.includes( activeSquare ) ) {
        // console.log("test row 1");
        // console.log( "this", $(this).attr('id') );
        // console.log( "grid.row1",grid.row1[0]);
        // if ( (grid.row1[0] === activeSquare) && (grid.row1[1] === activeSquare) && (grid.row[2] === activeSquare) ) {
        //   console.log("winner");
        // }
        if ( (grid.row1[0] === activeSquare) && (grid.row1[1] === activeSquare) ){
          console.log("winner");
        }
        if ( (grid.row1[1] === activeSquare) && (grid.row1[0] === activeSquare ) ){
          console.log("wintwo");
        }
      }
      if (grid.row2.includes( activeSquare ) ) {
        console.log("test row 2");
      }
      if (grid.row3.includes( activeSquare ) ) {
        console.log("test row 3");
      }
      if (grid.col1.includes( activeSquare ) ) {
        console.log("test col 1");
      }
      if (grid.col2.includes( activeSquare ) ) {
        console.log("test col 2");
      }
      if (grid.col3.includes( activeSquare ) ) {
        console.log("test col 3");
      }
      if (grid.dia1.includes( activeSquare ) ) {
        console.log("test dia 1");
      }
      if (grid.dia2.includes( activeSquare ) ) {
        console.log("test dia 2");
      }

      // console.log(grid[key]);
      // console.log( grid[key].includes(activeSquare) );
      // if ( grid[key].includes( activeSquare ) === true ){
      //   console.log("yippee");
      // }
      // if activeSquare = grid
      // console.log(grid[key]);
      // console.log(grid);
    // }

    // console.log($squareActive);
    // const newSquareContent = $squareActive.text("X")
  }) // end of 'on.('click')' function



})
