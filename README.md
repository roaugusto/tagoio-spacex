## Sobre o Projeto

O objetivo do projeto foi desenvolver uma aplicação consumindo a api SpaceX em 
GraphQL, disponível em [https://api.spacex.land/graphql/](https://api.spacex.land/graphql/),
obtendo os nomes das naves ativas e suas respectivas missões.

### Exemplo disponível em:


## Tecnologias envolvidas

O projeto foi desenvolvido em Node.js com Typescript utilizando Prettier e Eslint 
para a padronização do código.

Para a leitura da api, utilizou-se a biblioteca 'apollo-fetch'.

## Instalação

Para instalação do projeto, executar o comando:

```
yarn
```
E para execução:

```
yarn start
```
Após o start, verificar o resultado da api através da url:

Formatado em ejs: [http://localhost:3333](http://localhost:3333)
Formatado em json: [http://localhost:3333/json](http://localhost:3333/json)

## Observação

Para realizaro o filtro das naves ativas, seria necessário colocar o filtro a seguir:
```
{
  ships(find: {active: true}) {
    id
    name
  }
}
```

Realizando a chamada com o filtro descrito acima, a api não retorna nenhum resultado. Assim,
foi necessário realizar a chamada sem o filtro e somente após o retorno da api 
realizar a fitragem.

## Contribuições
Contribuições são bem vindas. Qualquer dúvida, fique a vontade para entrar em contato.

