$( document ).ready(function(){

    $("#btnAgregar").click(function(){

        let texto = $("#txtBox").val();

        let entrada ='<li class="list-group-item" id="listado"><input type="checkbox" id="check">'+' '+ texto +' '+'<button type="button" id="btnBorrar" class="btn btn-outline-danger">X</button></li>'; 

        if(texto != ""){
            $("#listArea").append(entrada);
            $("#txtBox").val("");
            $("#txtBox").focus();    
        }
        else{
            Swal.fire('Debe ingresar una tarea');
        }         
    });
    //Tachar elementos con check
    $(document).on('change','#check',function(objeto){
        
        if($(objeto.target).prop('checked')){
            $(objeto.target).parent().css("text-decoration","line-through");
        }
        else{
            $(objeto.target).parent().css("text-decoration","none");
        }
       
    });
    //Eliminar elementos con button
    $(document).on('click','#btnBorrar',function(objeto){
        $(objeto.target).parent().remove();
    });

});

