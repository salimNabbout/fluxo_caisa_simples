# Fluxo de Caixa Simples

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/salimNabbout/fluxo_caisa_simples)

App estático para controle de fluxo de caixa de pequena empresa.

## Recursos

- Saldo bancário inicial.
- Entradas e saídas com data, categoria, valor, situação, forma de pagamento, cliente/fornecedor, documento e observações.
- Dashboard por dia, mês e ano.
- Saldo inicial do período, entradas, saídas, saldo final, previsto e projetado.
- Busca e filtros.
- Tela preta/tela clara com preferência salva no navegador.
- Importação e exportação CSV.
- Exportação JSON.

## Importação de planilha

No Excel ou Google Sheets, salve/baixe a planilha como CSV e use o botão `Importar CSV` no app.

Colunas aceitas:

`data`, `tipo`, `descricao`, `categoria`, `valor`, `situacao`, `forma_pagamento`, `cliente_fornecedor`, `documento`, `observacoes`.

Datas: `dd/mm/aaaa` ou `aaaa-mm-dd`.
Valores: `1.234,56` ou `1234.56`.

## Render

Clique no botão **Deploy to Render** acima ou acesse diretamente:

https://render.com/deploy?repo=https://github.com/salimNabbout/fluxo_caisa_simples

Configuração para Static Site:

- Build Command: `npm run build`
- Publish Directory: `dist`

Também há um `render.yaml` pronto para Blueprint.
