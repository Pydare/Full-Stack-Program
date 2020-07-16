$(document).ready(function () {
    //   Week4 Assignment Task2
    $('#reserveBtn').click(() => {
        $('#reserveModal').modal('toggle');
    });
    $('#cancelReservation').click(() => {
        $('#reserveModal').modal('hide');
    });

    // Week4 Assignment Task3 ==> better to use jQuery then JS
    $('#login-Btn').click(()=> {
        $('#loginModal').modal('toggle');
    });
    $('#cancelBtn').click(() => {
        $('#loginModal').modal('hide');
    });

    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });

//     const cancelBtn = document.querySelector("#cancelBtn");
//     cancelBtn.addEventListener("click", () => {
//     //  data-dismiss="modal"
//     $('#loginModal').modal('hide');
// });
});






