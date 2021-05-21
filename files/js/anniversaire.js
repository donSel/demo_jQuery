$(function() {
    
    $( "#click" ).click(function() {
        
        
        $( "#bloc1" ).slideToggle( "slow" ); 
        // $(".block").animate({"left": "+=100px"}, "fast");
        
        $(".block").animate({
            width: "90%",
            height: "300%",
        }, "fast");
        
    });
    
    $("#right").click(function(){
        $(".block").animate({"left": "+=40px"}, "fast");
    });
    
    $("#left").mouseover(function(){
        $(".block").animate({"left": "-=40px"}, "fast");
    });
    
    $("#top").mouseover(function(){
        $(".block").animate({"top": "-=40px"}, "fast");
    });
    
    $("#bottom").mouseover(function(){
        $(".block").animate({"top": "+=40px"}, "fast");
    });
    
});