console.log("Logic connected");

let activeLetter = "X";

const ticTac = {
    winning: {
      row1: [0, 1, 2],
      row2: [3, 4, 5],
      row3: [6, 7, 8],
      col1: [0, 3, 6],
      col2: [1, 4, 7],
      col3: [2, 5, 8],
      dia1: [0, 4, 8],
      dia2: [2, 4, 6]
    },
    testingComb: {
      1: ["row1", "col1", "dia1"],
      2: ["row1", "col2"],
      3: ["row1", "col3", "dia2"],
      4: ["row2", "col1"],
      5: ["row2", "col2", "dia1", "dia2"],
      6: ["row2", "col3"],
      7: ["row3", "col1", "dia2"],
      8: ["row3", "col2"],
      9: ["row3", "col3", "dia1"]
    },
    moves: [],

    position: function( turn ) {
        // assign first digit to activeLetter
        const activeLetter = turn.slice(0,1);
        // assign second digit to activePos
        const activePos = turn.slice(1,2);

        //testing output
        // console.log( activeLetter);
        console.log( activePos );

        // input the activeLetter into the 'moves' array at position 'activePos'
        this.moves[activePos] = activeLetter;

        // testing output
        // console.log( this.moves );

        // test the array against the winning combinations
        this.winningCalc();
    },
    winningCalc: function (){
          // console.log( this.testingComb[activePos]);
          // console.log( "line49: ", activeLetter);

        // for ( let key in this.winning ) {
        //   for (let key in this.winning.)
        //   console.log( this.winning[key] );

    }
          // const box = "box" + activePos;

          // ticTac.moves.box = 4;
          // ticTac.moves.boxactivePos) = activeLetter;
          // const activePos = pos;
          // ticTac.moves.letter = pos;
          // // ticTac.moves = { letter, pos };
          // console.log( activeLetter );
          // console.log( pos );
          // console.log( this.moves );


}

const testData = [ "X3", "O2", "X6", "O1", "X8", "O0", "X4" ]



for (let keys in testData) {
  // console.log( testData[keys] + " and " + testData );
  console.log( ticTac.position( testData[keys]) );
  console.log( ticTac.moves);
}


// $('.square').on('click', function() {
//   console.log("I got clicked");
//   // console.log( $(this).attr('id') );
//   const activeSquare = $(this).attr('id');
//
//   // If a square is not empty
//   if ( $(this).text() === "" ){ // determine if square is empty
//     // if square is not empty, place the activeLetter in the square
//     $(this).text(activeLetter);
//     // now need to switch the activeLetter
//     if (activeLetter === "X") {
//       activeLetter = "O";
//     } else {
//       activeLetter = "X";
//     }
//   } else {
//     event.preventDefault();
//   }
//
//   // for ( let key in grid) {
//     // console.log("activesquare: ", activeSquare);
//     // console.log( grid.row1.includes(activeSquare) );
//     if (grid.row1.includes( activeSquare ) ) {
//       // console.log("test row 1");
//       // console.log( "this", $(this).attr('id') );
//       // console.log( "grid.row1",grid.row1[0]);
//       // if ( (grid.row1[0] === activeSquare) && (grid.row1[1] === activeSquare) && (grid.row[2] === activeSquare) ) {
//       //   console.log("winner");
//       // }
//       if ( (grid.row1[0] === activeSquare) && (grid.row1[1] === activeSquare) ){
//         console.log("winner");
//       }
//       if ( (grid.row1[1] === activeSquare) && (grid.row1[0] === activeSquare ) ){
//         console.log("wintwo");
//       }
//     }
//     if (grid.row2.includes( activeSquare ) ) {
//       console.log("test row 2");
//     }
//     if (grid.row3.includes( activeSquare ) ) {
//       console.log("test row 3");
//     }
//     if (grid.col1.includes( activeSquare ) ) {
//       console.log("test col 1");
//     }
//     if (grid.col2.includes( activeSquare ) ) {
//       console.log("test col 2");
//     }
//     if (grid.col3.includes( activeSquare ) ) {
//       console.log("test col 3");
//     }
//     if (grid.dia1.includes( activeSquare ) ) {
//       console.log("test dia 1");
//     }
//     if (grid.dia2.includes( activeSquare ) ) {
//       console.log("test dia 2");
//     }
//
//     // console.log(grid[key]);
//     // console.log( grid[key].includes(activeSquare) );
//     // if ( grid[key].includes( activeSquare ) === true ){
//     //   console.log("yippee");
//     // }
//     // if activeSquare = grid
//     // console.log(grid[key]);
//     // console.log(grid);
//   // }
//
//   // console.log($squareActive);
//   // const newSquareContent = $squareActive.text("X")
// }) // end of 'on.('click')' function
