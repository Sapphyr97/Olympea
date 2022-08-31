$(document).ready(function(){

    $(function(){
        setInterval(function(){
        $(".slideshow ul").animate({marginLeft:-350},800,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
        })
        }, 3500);
    });

    $("#envoie").click(function(){
    
        console.log("tu as cliquer")
    
        let boite= $(".tchat2")
        let texx = $("#textes")
       
        if(texx.val() ==""){
            console.log("je suis vide");

        }else{
            let boites=texx.val()
            $(".tchat2").append(`<p style="color:black">${boites}</p>`)
            texx.val("");
        }
    })

   
})

function cache() {
    var didi = document.getElementById("main1");
    
    if (didi.style.display === "none")
     { 
         didi.style.display = "block";
    } 
    else {
      div.style.display = "none";
    }
}











