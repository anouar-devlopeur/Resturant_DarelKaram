$(document).ready(function(){

    $("#con").click(function(){
   
        var login ="Admin";
        var pwd ="Admin";
        var loguser =$("#utilisateur").val();
        var pwduser =$("#motdepasse").val();
        if((login==loguser)&&(pwd==pwduser)){
            document.location='index.html';
        }
        else{
            $("#erreur").show();
        }
         
         });

  });