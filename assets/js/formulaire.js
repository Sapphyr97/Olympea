const Users = {

    utilisateur:{
        "email":[],
        "password":[],

    }
}





$(document).ready(function(){

    $("#submit").click(function(){


        let email = $("#mail").val()
        let password = $("#password").val()


        if(email &&  password != ""){

            Users.utilisateur.email.push(email)
            Users.utilisateur.password.push(password)
            $("#mail").val("")
            $("#password").val("")

        }else{
            console.log("rempli les champs")
        }



        console.log(Users)
    })



    $("#btn2").click(function(){


        let newemail= document.getElementById("email2").value
        let newpassword= document.getElementById("password2").value

        
        for (let index = 0; index < Users.utilisateur.email.length &&  
            index < Users.utilisateur.password.length ; index++ ) {

            if (newemail== Users.utilisateur.email[index] 
                && newpassword==Users.utilisateur.password[index]){
                    window.open("\page3.html");


                

                }else{

                alert("veuillez ressaisir vos données!!")
            }        
            
        }

    })


})

// document.location.href="https://www.mondomaine.com"
