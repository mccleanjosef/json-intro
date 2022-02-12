console.log('script is linked');

$(document).ready(function(){

    // Using the AJAX function to make a request to our data
    $.ajax({
        // how we'll get the data
        type: "GET",
        url: "./json/intro.json",
        // only run this function, if the ajax handler can successfully retieve the data
        success: function(response){
            console.log(response);

            document.getElementById("imageContainer").innerHTML = "<img src='" + response.image + "'>";
        }
    });

    // without arrow function
    // const popUpBtn = document.querySelector('#popUpBtn');

    // function clickPopUp(){
    //     $('#popUp').toggle();
    // }

    // popUpBtn.addEventListener("click", clickPopUp);


    const popUpBtn = document.querySelector('#popUpBtn');

    const popUp = () => {
        $('#popUp').toggle();
    }

    popUpBtn.addEventListener("click", popUp);

});

