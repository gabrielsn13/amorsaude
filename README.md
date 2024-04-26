# Projeto Teste Full-stack para Amoresaude

## Executar o DockerFile
1. No terminal, entre na pasta amorsaude e digite o comando docker-compose up
2. Caso tenha algum problema durante a execução do docker-compose, basta alterar a versão do node nos arquivos DockerFile (frontend e api) para a mesma versão instalada na máquina

## Considerações finais
1. Vale ressaltar, o projeto não está completo, então disponibilizei somente as funcionalidades que consegui validar e testar como: autenticação, login, redirecionamento de telas e cadastro de usuário,
    com as respectivas validações de usuário e senha.
2. O token é gerado por JWT. O login do usuário é armazenado no localstorage do navegador. 
3. Para validar o token basta acessar https://token.dev/

## Requisitos Preenchidos

## [Login] História de usuário
    . Como usuário, desejo ver uma tela de login com dois campos: um para e-mail e outro para senha, para poder acessar o sistema.
    . Como usuário, quero poder interagir livremente com os campos de e-mail e senha na tela de login, sem receber nenhum feedback de erro, até o momento em que eu tente submeter os dados do formulário.
    . Como usuário, ao deixar algum campo vazio na tela login, quero ver a mensagens de erro relacionadas ao não preenchimento desses campos.
    . Como usuário, ao submeter um formulário inválido na tela de login, gostaria de receber um feedback do sistema para entender que cometi erros e poder corrigi-los.
    . Como usuário, ao inserir credenciais inválidas na tela de login, espero receber algum feedback do sistema.
    . Como usuário, ao enviar minhas credenciais corretas na tela de login, gostaria de ser redireciondo para dentro do sistema.
    . O usuário fosse autenticado somente quando o formulário for válido.