var divContainer = $("#MainContainer");

$("<span></span>").text("My Gram").css("margin-right","10px").appendTo(divContainer);
$("<button></button>").attr("id", "LogIn").text("Log In").appendTo(divContainer);
$("<button></button>").attr("id", "SignUp").text("Sign Up").appendTo(divContainer);

$("<br>").text("Sign Up").appendTo(divContainer);
$("<br>").text("Sign Up").appendTo(divContainer);

$("<span></span>").text("Image 1").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 2").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 3").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 4").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Image 5").css("margin-right", "10px").appendTo(divContainer);

$("<br>").text("Sign Up").appendTo(divContainer);
$("<br>").text("Sign Up").appendTo(divContainer);

$("<span></span>").text("About").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Blog").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Jobs").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("Helps").css("margin-right", "10px").appendTo(divContainer);

$("<br>").text("Sign Up").appendTo(divContainer);
$("<span></span>").text("English").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("2021").css("margin-right", "10px").appendTo(divContainer);
$("<span></span>").text("MyGram").css("margin-right", "10px").appendTo(divContainer);

$("#LogIn").click(function () {
    alert("You have logged in");
});

$("#SignUp").click(function () {
    $("#UserInputForm").show();
   
});

$("#UserInputForm").hide();

$(document).ready(function () {
    $('form[name="UserInputForm"]').validate({
        rules: {
            User: "required",
            Password: {
                required: true,
                minlength: 5,
            }
        },
        messages: {
            User: "Please enter your user name",
            Password: {
                required: "Please provide a password",
                minlength: "You password must be at lease 5 characters long",
            },
        },
        submitHandler: function (form) {
            var user = $("#User").val();
            var password = $("#Password").val();

            alert("The user your submitted was: " + user +
                " and the password is: " + password);
        }

    });
});
