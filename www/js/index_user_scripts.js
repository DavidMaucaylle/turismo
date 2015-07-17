(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
$("body").append('<a id="idGoPacucha" href="#idPacucha"  class="style-31"></a>');
$("body").append('<a id="idGoSondor" href="#idSondor"  class="style-31"></a>'); 
	 
$("body").append('<a id="idGoLarcay" href="#idLarcay"  class="style-31"></a>');
$("body").append('<a id="idGoBosque_piedra" href="#idBosque_piedra"  class="style-31"></a>');
$("body").append('<a id="idGoPampas" href="#idPampas"  class="style-31"></a>');
	 
	 
$("body").append('<a id="idGoLlamachayug" href="#idLlamachayug"  class="style-31"></a>');  

    
     /* button  #idver */
    $(document).on("click", "#idver", function(evt)
    {
        /* your code goes here */ 
		var opcion=$("#idopcion").val();
        
        console.log(opcion);
        
        if(opcion=="Pacucha"){
            $("#idGoPacucha").click();
        }
       else if(opcion=="Sondor"){
            $("#idGoSondor").click();
        }
       else if(opcion=="Larcay"){
             $("#idGoLarcay").click();
        }
		
	else if(opcion=="Bosque"){
             $("#idGoBosque_piedra").click();
        }
		
		
		
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
