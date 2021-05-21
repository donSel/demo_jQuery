$(function() {
    
    
    // BOUTON DU DEBUT
    
    $( "#click" ).click(function() {
        
        
        $( "#bloc1" ).slideToggle( "slow" ); 
        $(".block").animate({"left": "+=100px"}, "fast");
        
        $(".block").animate({
            width: "90%",
            height: "290%",
        }, "fast");
        
    });
    
    
    // MODIFIER LA TAILLE DU LOGO
    
    $("#plus_size").click(function() {
       
        $(".block").animate({
            height: '+=150px',
            width: '+=150px'
        }, "fast");
        
    });
    
    $("#less_size").click(function() {
       
        $(".block").animate({
            height: '-=150px',
            width: '-=150px'
        }, "fast");
        
    }); 
    
    
    // CACHER LOGO
    
    // $("#click").click(function() {
       
    //     $( ".bloc" ).slideToggle( "slow" ); 
        
    // });
    
    
    // DEPLACER LE LOGO
    
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