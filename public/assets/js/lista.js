$(document).ready(function(){
    $("#lista").empty();
        $.ajax({
            type : 'GET',
            url : '/rest/index.php/pessoas/',
            dataType: 'json',
            ContentType: 'application/json; charset=utf-8',
            success: function(dados){
                $.each(dados, function(key, value){
                    $("#lista").append("<tr>"+
                                       "<td>"+value.nome+"</td> "+
                                       "<td>"+value.email+"</td> "+
                                       "<td>"+value.dt_cadastro+"</td>"+
                                       "<td><a href='?e=edit&editar=true&id="+value.id+"&nome="+value.nome+"&email="+value.email+"'><button class='btn btn-primary'>Editar</button></a></td>"+
                                       "<td><a href='?p=delet&deletar=true&id="+value.id+"'><button class='btn btn-danger'>Deletar</button></a></td>"+
                                       "</tr>");
                });
            }
        });

    $("#cadastrar").click(function(){
        var nome = $("#nome").val();
        var email = $("#email").val();
        $.ajax({
            type:   "POST",
            dataType: "json",
            url:    "/rest/index.php/pessoas/",
            data: '{"nome":"'+nome+'","email":"'+email+'"}'
        }).done(function(msg){
            alert('Cadastrado! Id: '+msg.id);
            window.location.href='/restClient/';
        });        
   });

   $("#editButton").click(function(){       
       var id = $("#editId").val();
       var nome = $("#editNome").val();
       var email = $("#editEmail").val();
        $.ajax({
            type:   "PUT",
            url:    "/rest/index.php/pessoas/"+id,
            data: '{"nome":"'+nome+'","email":"'+email+'"}',
        }).done(function(msg){
            alert('dados salvos ');
            window.location.href="/restClient/";
        });        
   });

   $("#deletar").click(function(){
       var id = $("#deletarId").val();
       alert('oi');
   });   

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }; 

    if( (getUrlParameter('p') == 'delet') && (getUrlParameter('deletar'))) {
        $.ajax({
            type: "DELETE",
            url : "/rest/index.php/pessoas/"+getUrlParameter('id'),
            dataType: "json",
            ContentType : "application/json; charset=utf-8"
        }).done(function(msg){
            alert("Deletado!");
            window.location.href="/restclient/";
        });
    }
});