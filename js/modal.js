// Modal
console.log("Modal connected");

// let display = $('#myModal').css('display');



$(document).ready( function () {

  // the code below does not work...yet
  // trying to get modal to no longer appear if you click anywhere

  // $(document).on('click', function () {
  //     if ( status === "win" ) {
  //       console.log("Hello status modal");
  //       $('#myModal').css('display', 'none')
  //
  //   })

    $('#myModal').on('click', function () {
        // if ( display = $('#myModal').css('display')) {
          console.log("Hello status modal");
          $('#myModal').css('display', 'none')
          $('#reset').css('visibility', 'visible');
      })
})
