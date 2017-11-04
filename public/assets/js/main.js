// My Account Form

// Function for creating a user account 
function newAccount() {
    $("#signupbtn").on("click", function(event) {
        event.preventDefault();

        // Make a newUser object
        var newUser = {
            email: $("#email").val().trim(),
            password: $("#password").val().trim()
        };
        
        //Send an AJAX POST-request with jQuery
        $.post("/api/new", newUser)
        // On success, run the following code
        .done(function(result) {
            console.log(newUser); 
            //loginAttempt(newUser.email, newUser.password);
        });

        // Empty each input box by replacing the value with an empty string
        $("#email").val("");
        $("#password").val("");
        $("#repeat_password").val("")
    });
};

// Function for generating a modal window after user signs up
function addModal() {
    var modal = document.getElementById('myModal');
    // Get the button that opens the modal
    var btn = document.getElementById("signupbtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    if(btn){
            btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if(span){
            span.onclick = function() {
            modal.style.display = "none";
        }
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}; 

//Function for generating a modal window if user chooses Search
function searchOption() {
    var modal = document.getElementById('searchModal');
    // Get the button that opens the modal
    var btn = document.getElementById("searchbtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-search")[0];
    
    // When the user clicks the button, open the modal 
    if(btn){
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    
    // When the user clicks on <span> (x), close the modal
    if(span){
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
};     

//Function for taking user back to Home page
function goBackToHome() {
    $("#gohomebtn").on("click", function(event) {
        event.preventDefault();
        document.location.href = "/";
    });
};
//Login
function setLoginButton() {
    
    $("#loginbtn").on("click", function(event) {
        event.preventDefault();
        email = $('#email').val();
        password = $('#password').val();
        var account = new Account();
        account.doLogin(email, password, goToHome);
    });    
};

function goToHome(success){
    if(success){
        window.location.href = "/";
    }
    else{
        alert("Username or password incorrect");
    }
};

function getFormattedDate(daysFromNow) {
    if(!daysFromNow){ daysFromNow = -1; }
    $today = new Date();
    $yesterday = new Date($today);
    $yesterday.setDate($today.getDate() + daysFromNow);

    var $dd = $yesterday.getDate();
    var $mm = $yesterday.getMonth()+1; //January is 0!

    var $yyyy = $yesterday.getFullYear();
    if($dd<10){$dd='0'+$dd} if($mm<10){$mm='0'+$mm} $yesterday = $mm+'/'+$dd+'/'+$yyyy;
    return $yesterday;
}

addModal();
searchOption();
goBackToHome();


//When the page loads, grab all of users
// $.get("/api/all", function(data) {

//   if (data.length !== 0 && newUser) {
//     for (var i = 0; i < data.length; i++) {
//       console.log(newUser);
//     }
//   }

// });


<<<<<<< HEAD
//PlayerStats Graphs

var ctx = document.getElementById("myChart").getContext("2d");
=======
// data
var colors = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
var numberData = [12, 19, 3, 5, 2, 3];

 // var graph = $("#graphs").html();
 var ctx = document.getElementById("myChart").getContext("2d");
>>>>>>> highlights

  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: colors,
          datasets: [{
              label: '# of Votes',
              lineTension: 0.15,
              data: numberData,
              backgroundColor: [
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
<<<<<<< HEAD
=======

  $(".graphController").on("click", function() {
    $("#currentChart").html($(this).html());

    switch ($(this).html()) {

      case "Points":  
        myChart.data.datasets[0].backgroundColor = ["rgba(255,100,100,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(255,100,100)"];
        myChart.update();
        break;
    
      case "Rebounds":  
        myChart.data.datasets[0].backgroundColor = ["rgba(56, 114,209,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(56,114,209)"];
        myChart.update();
        break;

      case "Assists":
        myChart.data.datasets[0].backgroundColor = ["rgba(55, 178, 164,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(55,178,164)"];
        myChart.update();
        break;
    
      case "Steals":
        myChart.data.datasets[0].backgroundColor = ["rgba(125, 168, 33,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(125,168,33)"];
        myChart.update();
        break;
    
      case "Blocks":
        myChart.data.datasets[0].backgroundColor = ["rgba(127, 24, 101,0.2)"];
        myChart.data.datasets[0].borderColor = ["rgb(127,24,101)"];
        myChart.update();
    }
>>>>>>> highlights

    myChart.update();
    console.log($(this).html());
    console.log(myChart.data.datasets[0].backgroundColor)


    
    // $("#myChart").html().data.datasets[0].backgroundColor = ["rgba(255,100,100,0.2)"];

  })