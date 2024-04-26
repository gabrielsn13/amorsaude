# Projeto Teste Full-stack para Amoresaude

## Executar o DockerFile
1. No terminal, entre na pasta amorsaude e digite o comando docker-compose up
2. Caso tenha algum problema durante a execução do docker-compose, basta alterar a versão do node nos arquivos DockerFile (frontend e api) para a mesma versão instalada na máquina

## Considerações finais
1. Vale ressaltar, o projeto não está completo, então disponibilizei somente as funcionalidades que consegui validar e testar como: autenticação, login, redirecionamento de telas e cadastro de usuário,
    com as respectivas validações de usuário e senha.
2. O token é gerado por JWT. O login do usuário é armazenado no localstorage do navegador. 
3. Para validar o token basta acessar https://token.dev/
