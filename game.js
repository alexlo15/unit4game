


// sets a random between 0-120
// HOW CAN WE FIX TO 19-120?? 

$(document).ready(function () {
    

   var numbers= [ ];
    var total=0;
    var losses=0;
    var wins=0;
    


 // generate random goal
    var goal = Math.floor(Math.random() * 102 + 19)
    console.log(goal)

    // display random goal to the page/ wins and losses
    $("#wintotal").text(wins);
    $("#losstotal").text(losses);   
    $('#randomnumber').text(goal);

// create a random value for each gem, 
    var gemNumbers = function(){
        for(var i=0; i<4; i++){
            var gemRange= Math.floor(Math.random()*12+1);
            numbers.push(gemRange);
        }
    }

    // run gemNum on initial refresh
    gemNumbers();

    // reset the game after each round
    var reset= function(){
       var Random = Math.floor(Math.random()*120+19);
        $("randomnumber").text(Random);
        numbers=[];
        gemNumbers();
        total=0;
        $("#total").text(total);
    }


    // Wins/Loss functions to count totals
    var winner= function(){
        wins++;
        $("#wintotal").text(wins);
        reset();
    }
    
    var loser= function() {
        losses++;
        $('#losstotal').text(losses);
        reset();
    }


    // buttons!

    $("#mario").on("click", function() {
        total = total + numbers[0];
        $("#total").text(total);

        if (total === goal) {
            winner();
        } else if (total > goal) {
            loser();
        }
    })
    
    $("#sonic").on("click", function() {
        total = total + numbers[1];
        $("#total").text(total);

        if (total === goal) {
            winner();
        } else if (total > goal) {
            loser();
        }
    })

    $("#zelda").on("click", function() {
        total = total + numbers[2];
        $("#total").text(total);

        if (total === goal) {
            winner();
        } else if (total > goal) {
            loser();
        }
    })

    $("#animal").on("click", function() {
        total = total + numbers[3];
        $("#total").text(total);

        if (total === goal) {
            winner();
        } else if (total > goal) {
            loser();
        }
    })


});



