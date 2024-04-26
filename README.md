# Projeto Teste Full-stack para Amoresaude

## Executar o DockerFile
1. No terminal entre na pasta amorsaude e digite o comando docker-compose up
2. Caso de algum problema no durante a execução do docker, basta alterar a versao do node nos arquivos DockerFile (frontend e api) para a versao instalada na máquina

## Considerações finais
1. Vale ressaltar, o projeto não está completo, então disponibilizei somente as funcionalidades que consegui validar e testar como: autenticação, login e cadastro de usuário bem
    como suas respectivas validações de usuário e senha.
2. O token é gerado por JWT. O login do usuário é armazenado no localstorage do navegador. 
3. Para validar o token basta acessar https://token.dev/
