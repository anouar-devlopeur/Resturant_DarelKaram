
$(document).ready(function(){
    /*hide all menus*/

    $("#mpizza").hide();
    $("#mcafee").hide();
    $("#mglaces").hide();
    $("#mboissans").hide();
    $("#mrestau").hide();
    $("#mdivers").hide();

    /*commandes by categories*/

    $("#catpizza").click(function(){

      $("#mpizza").show();
      $("#mcafee").hide();
      $("#mglaces").hide();
      $("#mboissans").hide();
      $("#mrestau").hide();
      $("#mdivers").hide();

    });
     $("#catcafee").click(function(){

      $("#mpizza").hide();
      $("#mcafee").show();
      $("#mglaces").hide();
      $("#mboissans").hide();
      $("#mrestau").hide();
      $("#mdivers").hide();

    });
     $("#catglaces").click(function(){

      $("#mpizza").hide();
      $("#mcafee").hide();
      $("#mglaces").show();
      $("#mboissans").hide();
      $("#mrestau").hide();
      $("#mdivers").hide();

    });
    $("#catboissans").click(function(){

      $("#mpizza").hide();
      $("#mcafee").hide();
      $("#mglaces").hide();
      $("#mboissans").show();
      $("#mrestau").hide();
      $("#mdivers").hide();

    });
    $("#catrestau").click(function(){

      $("#mpizza").hide();
      $("#mcafee").hide();
      $("#mglaces").hide();
      $("#mboissans").hide();
      $("#mrestau").show();
      $("#mdivers").hide();

    });
      $("#catdivers").click(function(){

      $("#mpizza").hide();
      $("#mcafee").hide();
      $("#mglaces").hide();
      $("#mboissans").hide();
      $("#mrestau").hide();
      $("#mdivers").show();

    });
     let prixtot = 0;
    //commande pizza p1
      $( "#p1" ).click(function() {
      var prix= 20;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Pizza Junior..................'+prix+'DH TTC'; 
      optionValue = 'Pizza'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText)); 
      prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
    //commande pizza p2
      $( "#p2" ).click(function() {
      var prix= 30 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Pizza senior..................'+prix+'DH TTC'; 
      optionValue = 'Pizza'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText)); 
      prixtot+=prix;
      $("#total_commande").text(prixtot);
       });
    //commande pizza p3
      $( "#p3" ).click(function() {
      var prix= 45 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Pizza Méga..................'+prix+'DH TTC'; 
      optionValue = 'Pizza'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText)); 
      prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
    //ajouter cafe c1
      $( "#c1" ).click(function() {
      var prix= 20 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Café simple..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
    //ajouter cafe c2
      $("#c2").click(function() {
      var prix= 19 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Café double..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c3
      $( "#c3" ).click(function() {
      var prix= 25 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Café Capsule..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c4
      $( "#c4" ).click(function() {
      var prix= 19 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Café Latté..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c5
      $( "#c5" ).click(function() {
      var prix= 25 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Cappuccino..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
      prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c6
      $( "#c6" ).click(function() {
      var prix= 20 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Lait Chocolat..................'+prix+'DH TTC';   
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c7
      $( "#c7" ).click(function() {
      var prix= 20 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Thé à la ververine..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c8
      $( "#c8" ).click(function() {
      var prix= 18 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Thé à la menthe..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c9
      $( "#c9" ).click(function() {
      var prix= 25 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Thé glacé..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter cafe c10
      $( "#c10" ).click(function() {
      var prix= 19 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Lait chaud..................'+prix+'DH TTC'; 
      optionValue = 'Café'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
      prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Glace g1
      $( "#g1" ).click(function() {
      var prix= 19 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Glace au chocolat..................'+prix+'DH TTC'; 
      optionValue = 'Glace'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Glace g2
      $( "#g2" ).click(function() {
      var prix = 20 
      var tva=prix*0.07;
      prix+=tva;;
      optionText = 'Glace classique..................'+prix+'DH TTC';   
      optionValue = 'Glace'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Glace g3
      $( "#g3" ).click(function() {
      var prix = 26 
      var tva=prix*0.07;
      prix+=tva;;
      optionText = 'Glace pistache et vanille..................'+prix+'DH TTC';   
      optionValue = 'Glace'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Glace g4  
      $( "#g4" ).click(function() {
      var prix= 30 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Glace Amande et vanille..................'+prix+'DH TTC'; 
      optionValue = 'Glace'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      }); 
      //ajouter Glace g5
      $( "#g5" ).click(function() {
      var prix= 26 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Glace aux smarties..................'+prix+'DH TTC';  
      optionValue = 'Glace'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });              
      //ajouter Boissans b1
      $( "#b1" ).click(function() {
      var prix= 7 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Coca-cola..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b2
      $( "#b2" ).click(function() {
      var prix= 6 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = ' Fanta..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b3
      $( "#b3" ).click(function() {
      var prix= 9;
      var tva=prix*0.07;
      prix+=tva;     
      optionText = '  Huawai..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b4
      $( "#b4" ).click(function() {
      var prix= 15 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = ' Orangina..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b5
      $( "#b5" ).click(function() {
      var prix= 5 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Eau mineral..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b6
      $( "#b6" ).click(function() {
      var prix= 18 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Jus d’orange..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b7
      $( "#b7" ).click(function() {
      var prix= 19 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Jus de lait aux amandes Smoothie..........'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter Boissans b8
      $( "#b8" ).click(function() {
      var prix= 24 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Smoothie..................'+prix+'DH TTC'; 
      optionValue = 'Boissans'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r1
      $( "#r1" ).click(function() {
      var prix= 25 ;
      var tva=prix*0.07;
      prix+=tva;
      optionText = 'Salade niçoise..............'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r2
      $( "#r2" ).click(function() {
      var prix=28 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Salade marocaine.............'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r3
      $( "#r3" ).click(function() {
      var prix=28 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Salade César................'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r4
      $( "#r4" ).click(function() {
      var prix=28 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Plat Poulet au Four.............'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r5
      $( "#r5" ).click(function() {
      var prix=35 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = 'Plat Poisson à la Plancha...........'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot); 
      });
      //ajouter restaurant r6
      $( "#r6" ).click(function() {
      var prix=35 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = ' Plat Viande hachée Boulettes.........'+prix+'DH TTC'; 
      optionValue = ' restaurant'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
      //ajouter divers d1
      $( "#d1" ).click(function() {
      var prix=35 ;
      var tva=prix*0.07;
      prix+=tva;      
      optionText = ' Clinex..................'+prix+'DH TTC'; 
      optionValue = ' divers'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
      //ajouter divers d2
      $( "#d2" ).click(function() {
      var prix=3 ;
      var tva=prix*0.07;
      prix+=tva;     
      optionText = ' Briquet..................'+prix+'DH TTC'; 
      optionValue = ' divers'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
      //ajouter divers d3
      $( "#d3" ).click(function() {
      var prix=3 ;
      var tva=prix*0.07;
      prix+=tva;     
      optionText = ' Kinder Surprise...............'+prix+'DH TTC'; 
      optionValue = ' divers'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
      //ajouter divers d4
      $( "#d4" ).click(function() {
      var prix=5 ;
      var tva=prix*0.07;
      prix+=tva;     
      optionText = 'Chuopa Chup...............'+prix+'DH TTC'; 
      optionValue = ' divers'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });
      //ajouter divers d5
      $( "#d5" ).click(function() {
      var prix=6 ;
      var tva=prix*0.07;
      prix+=tva;     
      optionText = ' Snikers..................'+prix+'DH TTC'; 
      optionValue = ' divers'; 
      $('#liste').append($('<option>').val(optionValue).text(optionText));
            prixtot+=prix;
      $("#total_commande").text(prixtot);
      });         

      // button Annuler
      $("#ANNULER").click(function(){
      $("option").remove();
      prixtot=0;
      $("#total_commande").text("00");
      });
      //button valider
       var id= parseInt(5*Math.random());
       var tva="7%";
       let date=new Date();
      $("#VALIDER").click(function(){
       var affich ={restaurant:         "DAR Al KARAM  ",
                 caisse:  id,
                 tva:             "7%",
                 TotalTTC:       prixtot,
                 date:           date }
      let objj = JSON.stringify(affich);
      const file = 'data.json';
      localStorage.setItem(file,objj);
      var fromJson=localStorage.getItem(file);
      JSON.parse(fromJson);
      alert(fromJson);
      });

 });



