// Define variables
var itemelement;
var itemopening = "<li class='list-group-item'> <p>";
var itemclosing = "</p> <i class='fas fa-chevron-circle-down'></i> <i class='fas fa-chevron-circle-up'></i> <i class='fas fa-minus-circle'></i> </li>";
var itemlabel;

// Example of Function that Returns a Result
function CreateItemElement(){
    itemlabel = $("#itemlabel").val()
    itemelement = itemopening + itemlabel + itemclosing;
    return itemelement;
}

$(document).ready(function(){
   console.log("Main.js ready...");
    
    $(".fa-plus-circle").click(function(){
       $(".list-group").prepend(CreateItemElement());
    });
    
});

// Bind Event Handlers to the Elements Added to the DOM

$(document).on("mouseenter", ".list-group-item", function(){
    $(this).addClass("active");
    $(this).children("i").css("display","inline");
});

$(document).on("mouseleave", ".list-group-item", function(){
    $(this).removeClass("active");
    $(this).children("i").css("display","none");
});

$(document).on("click", ".list-group-item", function(){
    $("#itemdescription").text($(this).children("p").text());
});

$(document).on("click", ".fa-minus-circle", function(){
    $(this).parent(".list-group-item").remove();
});

$(document).on("click", ".fa-chevron-circle-up", function(){
    $(this).parent(".list-group-item").insertBefore($(this).parent(".list-group-item").prev());
});

$(document).on("click", ".fa-chevron-circle-down", function(){
    $(this).parent(".list-group-item").insertAfter($(this).parent(".list-group-item").next());
});