// Modal
console.log("Modal connected");


$(document).ready( function () {

    // When the user clicks on <span> (x), close the modal
    $('.close').on('click', function () {
      $('#myModal').css('display', 'none'); // hide the modal
    })

    // // When the user clicks anywhere outside of the modal, close it
    // $(window).on('click', function(event) {
    //   if (event.target == modal) {
    //     $('#myModal').css('display', 'none'); // hide the modal
    //     // modal.style.display = "none";
    //   }
    // })
})
