# Fluxo de Caixa Simples

App estático para controle de fluxo de caixa de pequena empresa.

## Recursos

- Saldo bancário inicial.
- Entradas e saídas com data, categoria, valor, situação, forma de pagamento, cliente/fornecedor, documento e observações.
- Dashboard por dia, mês e ano.
- Saldo inicial do período, entradas, saídas, saldo final, previsto e projetado.
- Busca e filtros.
- Importação e exportação CSV.
- Exportação JSON.

## Importação de planilha

No Excel ou Google Sheets, salve/baixe a planilha como CSV e use o botão `Importar CSV` no app.

Colunas aceitas:

`data`, `tipo`, `descricao`, `categoria`, `valor`, `situacao`, `forma_pagamento`, `cliente_fornecedor`, `documento`, `observacoes`.

Datas: `dd/mm/aaaa` ou `aaaa-mm-dd`.
Valores: `1.234,56` ou `1234.56`.

## Render

Configuração para Static Site:

- Build Command: `npm run build`
- Publish Directory: `dist`

Também há um `render.yaml` pronto para Blueprint.
