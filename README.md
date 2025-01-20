## NodeJs&ExpressJs - Dog API

A aplicação segue uma estrutura de pastas organizada para facilitar a manutenção e a escalabilidade:

```code
src/
├── core/
├── infra/
├── modules/
├── services/
└── shared/
```

### Detalhamento das Pastas

```core/```

* Contém as configurações relacionadas ao carregamento seguro de variáveis de ambiente.


```infra/```

* Centraliza toda a configuração do servidor.</br>
* Implementação do módulo cluster para gerenciamento de múltiplos processos.</br>
* Configuração de graceful shutdown para desligamento seguro do servidor.</br>
* Configuração do Express e das rotas disponíveis.

`modules/`

* Abriga os módulos da aplicação. Cada módulo é responsável por lidar com um contexto específico da aplicação.

`services/`

* Destinada a abstrair integrações externas (ex.: chamadas para APIs de terceiros).
* **Obs.**: Fluxo não implementado devido ao limite de tempo

`shared/`

Contém configurações e funcionalidades gerais reutilizáveis na aplicação, como:

* Função de log assíncrona.
* Formatadores para padronização de saídas.
* Configuração de injeção de dependências usando containers.

## Configuração do Ambiente

* `node: ~20.12`<br/>
* `yarn: ~1.22` (Remover esta restrição do `package.json` se estiver usando `npm`)

Instale as dependências:

`yarn`

Configure as variáveis de ambiente no arquivo `.env`

`DOC_API_URL=https://dog.ceo/api/breeds/image/random`

## Execução do Projeto

`yarn build && yarn start:server`