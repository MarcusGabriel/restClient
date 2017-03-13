<!DOCTYPE html>
<html lang='pt-BR'>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <title>Consumindo com JQuery</title>
        <link rel="stylesheet" href="public/assets/css/bootstrap.min.css"/>
    </head>
    <body>
        <h1> Cadastrar Cliente</h1>
        <form method="post" autocomplete="off">
            <label>Nome:
            <input name="nome" type="text" id="nome" value=""required/></label><br />
            <label>Email:
            <input name="email" type="text" id="email" size="60" required/></label><br />            
            <button id='cadastrar' type="submit">Salvar</button>
        </form>
        <hr>
        <div class='col-md-8'>
            <table class='table table-bordered table-striped table-responsive table-hover'>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Email</td>
                        <td>data cadastro</td>
                        <td>Excluir</td>
                        <td>Deletar</td>
                    </tr>
                </thead>
                <tbody id='lista'>                
                </tbody>
            </table>
        </div>

        <?php 
            if(isset($_GET['e']) && $_GET['editar'] == true){
                require 'includes/edit.php';
            } 
        ?> 

        <script src='public/assets/js/jquery.min.js'></script>
        <script src='public/assets/js/lista.js'></script>
    </body>
</html>