var randomans;
var lost;
var win;

// sets a random between 0-120
// HOW CAN WE FIX TO 19-120?? 
randomans = Math.floor(Math.random() * 101) + 19;
console.log(randomans)


$("result").html("Random Result: ")

for (var i = 0; i < 4; i++) {

    // set each crystals value 1-12
    var random = Math.floor(Math.random() * 12);
    console.log(random);


    var crystal = $("<div>");
    crystal.attr({
        "class": "crystals",
        "randomnumber": random,
    })

    $(".crystals").append(crystal);
}