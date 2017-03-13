$(document).ready(function(){
    function limpafields(){
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");                
    }
    $("#cep").blur(function(){
        nocharacter = /\D/ig;
        validacep = /^[0-9]{8}$/;
        var cep = $("#cep").val().replace(nocharacter, '');
        if( cep != ""){
            if(validacep.test(cep)){
                $.getJSON("//viacep.com.br/ws/"+cep+"/json/", function(dados){
                    if (! ("erro" in dados)){
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                        $("#ibge").val(dados.ibge);
                    }else{
                        limpafields();
                        alert('cep nao encontrado');
                    }
                });
            }else{
                limpafields();
                alert('formato cep invalido');
            }
        }else{
            limpafields();
        }
        
    });

});