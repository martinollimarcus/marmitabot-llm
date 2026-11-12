<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MarmitaBot - Restaurante Sabor & Cia</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Bibliotecas para formatar Markdown com segurança Anti-XSS -->
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/dompurify/dist/purify.min.js"></script>
  <style>
    .markdown-body table {
      width: 100%;
      border-collapse: collapse;
      margin: 8px 0;
      font-size: 0.8rem;
      background-color: #ffffff;
    }
    .markdown-body th,
    .markdown-body td {
      border: 1px solid #cbd5e1;
      padding: 6px 8px;
      text-align: left;
    }
    .markdown-body th {
      background-color: #fee2e2;
      color: #991b1b;
      font-weight: 600;
    }
    .markdown-body strong {
      font-weight: 700;
      color: #111827;
    }
    .markdown-body ol {
      list-style-type: decimal;
      margin-left: 1.25rem;
      margin-top: 4px;
      margin-bottom: 6px;
    }
    .markdown-body ul {
      list-style-type: disc;
      margin-left: 1.25rem;
      margin-top: 4px;
      margin-bottom: 6px;
    }
    .markdown-body li {
      margin-bottom: 2px;
    }
    .markdown-body p {
      margin-bottom: 6px;
    }
    .markdown-body p:last-child {
      margin-bottom: 0;
    }
    .markdown-body hr {
      border-color: #cbd5e1;
      margin: 8px 0;
    }
  </style>
</head>
<body class="bg-gray-100 h-screen flex flex-col justify-between max-w-2xl mx-auto p-4">

  <!-- Cabeçalho -->
  <header class="bg-red-600 text-white p-4 rounded-t-xl shadow flex justify-between items-center gap-2">
    <div>
      <h1 class="text-xl font-bold">🍱 MarmitaBot</h1>
      <p class="text-xs text-red-100">Restaurante Sabor & Cia</p>
    </div>
    <div class="flex items-center gap-2">
      <input id="apiKey" type="password" placeholder="OpenRouter API Key (sk-or-...)" class="text-black text-xs p-2 rounded border outline-none w-52 focus:ring-2 focus:ring-red-300" />
    </div>
  </header>

  <!-- Janela de Mensagens (já inicia com o cardápio visível) -->
  <main id="chat" class="flex-1 bg-white p-4 overflow-y-auto border-x flex flex-col gap-3 shadow-inner">
    <div class="bg-gray-200 p-3 rounded-lg max-w-[90%] self-start text-sm text-gray-800 rounded-bl-none markdown-body">
      <p>👋 Olá! Bem-vindo ao <strong>Sabor &amp; Cia</strong>! Confira nosso cardápio de hoje:</p>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Marmita</th>
            <th>Acompanhamentos</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><strong>Marmita Padrão</strong></td>
            <td>Bife Acebolado, Arroz, Feijão e Farofa</td>
            <td>R$ 22,00</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Marmita Fit</strong></td>
            <td>Frango Grelhado, Purê de Batata Doce e Legumes</td>
            <td>R$ 20,00</td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Marmita Vegana</strong></td>
            <td>Omelete de Grão-de-Bico com Salada</td>
            <td>R$ 18,00</td>
          </tr>
        </tbody>
      </table>
      <p>🚚 <strong>Taxa de entrega:</strong> R$ 5,00 (fixa para qualquer bairro)</p>
      <p>💬 <strong>Como pedir:</strong> Cole sua API Key acima e digite abaixo qual marmita você deseja, a quantidade e se quer alguma alteração (ex.: <em>"sem cebola"</em>, <em>"bife bem passado"</em>).</p>
    </div>
  </main>

  <!-- Campo de Entrada com contador de caracteres visual -->
  <footer class="bg-white p-3 border rounded-b-xl flex flex-col gap-1 shadow">
    <div class="flex gap-2">
      <input id="userInput" type="text" maxlength="300" placeholder="Digite seu pedido (ex: 1 Marmita Padrão sem cebola)..." class="flex-1 border p-2 text-sm rounded-lg outline-none focus:ring-2 focus:ring-red-500" onkeydown="if(event.key==='Enter') sendMessage()" />
      <button onclick="sendMessage()" class="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-red-700 transition">Enviar</button>
    </div>
    <span class="text-[10px] text-gray-400 self-end">Proteção ativa: limite de 300 caracteres por envio</span>
  </footer>

  <script src="app.js"></script>
</body>
</html>
