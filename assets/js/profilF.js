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

 $(document).ready(function(){

    $("#envoie").click(function(){
    
        console.log("tu as cliquer")
    
        let boite= $(".jojo")
        let texx = $("#textes")
       
        if(texx.val() ==""){
            console.log("je suis vide");

        }else{
            let boites=texx.val()
            $(".jojo").append(`<p style="color:white">${boites}</p>`)
            texx.val("");
        }
    })
    })


$(function(){
    setInterval(function(){
       $(".slideshow ul").animate({marginLeft:-1},500,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 3500);
 });





