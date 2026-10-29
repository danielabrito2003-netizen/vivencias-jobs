
# Vivências — Pedidos de Serviços

Aplicação desenvolvida em React e TypeScript para consultar e aceitar pedidos de serviços de reparação.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS

## Funcionalidades

- Listagem de pedidos de reparação.
- Apresentação do serviço, cidade, data, hora, duração e preço.
- Filtro de pedidos por cidade.
- Botão para aceitar um pedido, removendo-o da lista.
- Mensagem quando não existem pedidos disponíveis.
- Simulação de carregamento inicial de um segundo.
- Interface adaptada a diferentes tamanhos de ecrã.

## Como executar o projeto

### 1. Requisitos

Ter o Node.js e o npm instalados.

### 2. Instalar as dependências

Na pasta do projeto, executar:

```bash
npm install
```

### 3. Iniciar a aplicação

```bash
npm run dev
```

Abrir no navegador o endereço indicado pelo Vite, normalmente:

http://localhost:5173/

### 4. Compilar para produção

```bash
npm run build
```

## Dados

Os pedidos são carregados a partir de dados locais definidos no ficheiro `src/data.ts`.

Não é necessário utilizar uma base de dados ou um servidor.

Os pedidos aceites são guardados temporariamente no estado da aplicação. Ao atualizar a página, os pedidos voltam a aparecer.

## Melhorias futuras

- Integrar uma API para obter pedidos reais de serviços.
- Guardar os pedidos aceites numa base de dados.
- Adicionar autenticação para os profissionais.
- Criar testes automatizados para validar os filtros e a aceitação dos pedidos.
