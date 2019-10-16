// Modal
console.log("Modal connected");



$(document).ready( function () {

    // When the user clicks on <span> (x), close the modal
    $('.close').on('click', function () {
      $('#myModal').css('display', 'none'); // hide the modal
    })

    // the code below does not work...yet
    // trying to get modal to no longer appear if you click anywhere
    const display = $('#myModal').css('display');
      if (display  === 'block') {
        $('body').on('click', function () {
        console.log("Hello status modal");
        $('#myModal').css('display', 'none')
      }
    )}
})
