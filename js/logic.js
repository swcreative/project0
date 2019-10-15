console.log("Logic connected");

let startPlayer = "X";

let activeLetter = startPlayer;

let status = "active";

let counterX = 0;

let counterO = 0;

const ticTac = {
    activePos: "", // need to declare this variable to be used in multiple methods
    testPos1: "",
    testPos2: "",
    testPos3: "",
    winner: "",
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
      0: ["row1", "col1", "dia1"],
      1: ["row1", "col2"],
      2: ["row1", "col3", "dia2"],
      3: ["row2", "col1"],
      4: ["row2", "col2", "dia1", "dia2"],
      5: ["row2", "col3"],
      6: ["row3", "col1", "dia2"],
      7: ["row3", "col2"],
      8: ["row3", "col3", "dia1"]
    },
    moves: [ "","" ,"" ,"" ,"" ,"" ,"" ,"" ,"" ], // setting an empty array. I need to start the array with a length so that I can check each go if array has any undefined elements. If so, then continue playing.
    noWinnerTest: function() {
      if (ticTac.moves.includes("") === false) {
          console.log("Nobody won");
          status = "draw";
        } else {
            console.log("Keep going");
      }
    },
    position: function( turn ) {
        // assign first digit to activeLetter
        activeLetter = turn.slice(0,1);
        // assign second digit to activePos
        activePos = turn.slice(1,2);

        //testing output
        console.log( activeLetter);
        console.log( activePos );

        // input the activeLetter into the 'moves' array at position 'activePos'
        this.moves[activePos] = activeLetter;

        // testing output
        console.log( this.moves );

        // test the array against the winning combinations
        this.winningCalc();
    },
    winningCalc: function (){

        // convert the activeNumber from a string to number to use in object lookup
        const activeNumber = Number(activePos);

        // determine the test group required
        const tests = this.testingComb[activeNumber];

        // loop through each relevant test
        for ( let key in tests ) {

            // testing output: showing the test name required eg 'row1'
            console.log( tests[key]);

            // create a varaible for each test value, eg 'row1'
            const test = tests[key];

            // use varaible 'test' to look up positions to test for activeLetter
            // below are the three positions to test
            testPos1 = this.winning[test][0];
            testPos2 = this.winning[test][1];
            testPos3 = this.winning[test][2];

            // console.log( testPos1);
            // console.log( testPos2);
            // console.log( testPos3);
            //
            // console.log( this.moves[testPos1]);
            // console.log( this.moves[testPos2]);
            // console.log( this.moves[testPos3]);
            //
            // console.log( activeLetter);

            // test if all squares have a value in them. If so, declare no winner and run reset function.
            this.noWinnerTest();
            // do your three position test for winner
            if ( (this.moves[testPos1] === activeLetter) &&
                 (this.moves[testPos2] === activeLetter) &&
                 (this.moves[testPos3] === activeLetter) ) {

              status = "win";
              winner = activeLetter;


              if ( winner === "X" ) {
                counterX += 1;
              }
              if ( winner === "O" ) {
                counterO += 1;
              }
              return;
            } // end of if statement

        } // end of for statement
    }
} // end of object ticTac

// const testData1 = [ "X0", "Y1", "X3", "Y2", "X6" ]
// const testData = [ "X3", "O2", "X6", "O1", "X8", "O0", "X4" ]
// const testData2 = [ "O0", "O1", "O2" ]



// for (let keys in testData ) {
//   console.log( ticTac.position( testData[keys] ) );
// }
