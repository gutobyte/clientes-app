# ClientesApp

Uma simples aplicação web (CRUD) que cadastra clientes, este projeto é apenas o frontend, utilizando angular-cli versão 12.1.1 e typescript versão 4.3.5, o template: bootstrap.

É necessário ter **node.js** instalado e o **npm**, depois basta dar git clone e abir o projeto no vscode ou qualquer outra IDE e rodar o seguinte comando dentro da pasta do projeto: `npm install` para que seja baixado todas as dependencias e criar a pasta node_modules e depois `ng s` para subir a aplicação, quando concluido basta acessar localhost:4200.

## Backend

O backend foi feito em Java com springboot, utilizando jpa-data, lombok e um banco em memória h2, nele se utiliza as validações de Cpf, tokens jwt, controllers e services. ELe se encontra neste repositório:

https://github.com/gutobyte/cadastro-cliente



