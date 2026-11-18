// ============================================================================
// 1. CATÁLOGO IMUTÁVEL DA LOJA (FONTE ÚNICA DE VERDADE)
// ============================================================================
const CARDAPIO = Object.freeze({
  padrao: {
    key: "padrao",
    categoria: "marmita",
    nome: "Marmita Padrão",
    plural: "Marmitas Padrão",
    preco: 22.00,
    emoji: "🥩",
    keywords: ["padrao", "bife", "tradicional"],
    descricao: "Bife acebolado suculento grelhado na hora, acompanhado de arroz branco soltinho, feijão carioca temperado e farofa crocante.",
    radioTitulo: "Ponto do bife",
    opcoesRadio: ["Ao ponto (padrão)", "Bife bem passado", "Bife mal passado"],
    checkTitulo: "Retirar ingredientes",
    opcoesCheck: ["Sem cebola", "Sem arroz", "Sem feijão", "Sem farofa", "Pouco sal", "Sem pimenta"]
  },
  fit: {
    key: "fit",
    categoria: "marmita",
    nome: "Marmita Fit",
    plural: "Marmitas Fit",
    preco: 20.00,
    emoji: "🍗",
    keywords: ["fit", "frango", "batata doce", "batata-doce", "leve"],
    descricao: "Filé de peito de frango grelhado com ervas finas, purê cremoso de batata-doce e mix de legumes cozidos no vapor.",
    radioTitulo: "Preparo do frango",
    opcoesRadio: ["Ervas finas (padrão)", "Frango bem dourado", "Sem sal adicionado"],
    checkTitulo: "Retirar ingredientes",
    opcoesCheck: ["Sem purê de batata-doce", "Sem legumes", "Sem ervas finas", "Sem pimenta"]
  },
  vegana: {
    key: "vegana",
    categoria: "marmita",
    nome: "Marmita Vegana",
    plural: "Marmitas Veganas",
    preco: 18.00,
    emoji: "🥗",
    keywords: ["vegana", "vegano", "omelete", "grao", "vegetal"],
    descricao: "Omelete dourado de farinha de grão-de-bico temperado com cúrcuma e cheiro-verde, acompanhado de salada fresca da estação.",
    radioTitulo: "Tempero do omelete",
    opcoesRadio: ["Tempero padrão", "Sem cúrcuma", "Pouco sal"],
    checkTitulo: "Retirar ingredientes",
    opcoesCheck: ["Sem salada", "Sem cheiro-verde", "Sem pimenta"]
  },
  refri: {
    key: "refri",
    categoria: "bebida",
    nome: "Refrigerante Lata 350ml",
    plural: "Refrigerantes Lata 350ml",
    preco: 6.00,
    emoji: "🥤",
    keywords: ["refrigerante", "refri", "coca", "guarana", "sprite", "lata"],
    descricao: "Lata bem gelada de 350ml. Escolha seu sabor favorito e se deseja acompanhamento para o copo.",
    radioTitulo: "Sabor do refrigerante",
    opcoesRadio: ["Coca-Cola", "Coca-Cola Zero", "Guaraná Antarctica", "Sprite"],
    checkTitulo: "Acompanhamento grátis",
    opcoesCheck: ["Copo com gelo", "Rodelas de limão", "Canudo biodegradável"]
  },
  suco: {
    key: "suco",
    categoria: "bebida",
    nome: "Suco Natural 500ml",
    plural: "Sucos Naturais 500ml",
    preco: 8.00,
    emoji: "🧃",
    keywords: ["suco", "laranja", "limao", "maracuja"],
    descricao: "Suco natural preparado na hora com fruta fresca (garrafa de 500ml).",
    radioTitulo: "Sabor da fruta",
    opcoesRadio: ["Laranja", "Limão", "Maracujá"],
    checkTitulo: "Preparo do suco",
    opcoesCheck: ["Sem açúcar", "Com adoçante", "Bastante gelo", "Sem gelo"]
  },
  agua: {
    key: "agua",
    categoria: "bebida",
    nome: "Água Mineral 500ml",
    plural: "Águas Minerais 500ml",
    preco: 4.00,
    emoji: "💧",
    keywords: ["agua", "mineral"],
    descricao: "Garrafa de água mineral gelada de 500ml.",
    radioTitulo: "Tipo de água",
    opcoesRadio: ["Sem gás", "Com gás"],
    checkTitulo: "Acompanhamento grátis",
    opcoesCheck: ["Copo com gelo", "Rodelas de limão"]
  },
  pudim: {
    key: "pudim",
    categoria: "sobremesa",
    nome: "Pudim de Leite Condensado",
    plural: "Pudins de Leite Condensado",
    preco: 9.00,
    emoji: "🍮",
    keywords: ["pudim"],
    descricao: "Fatia cremosa de pudim caseiro de leite condensado com calda de caramelo.",
    radioTitulo: "Calda de caramelo",
    opcoesRadio: ["Calda padrão", "Calda extra"],
    checkTitulo: "Itens descartáveis",
    opcoesCheck: ["Enviar colher descartável"]
  },
  mousse: {
    key: "mousse",
    categoria: "sobremesa",
    nome: "Mousse de Maracujá",
    plural: "Mousses de Maracujá",
    preco: 8.00,
    emoji: "🍨",
    keywords: ["mousse", "musse"],
    descricao: "Mousse aerado de maracujá natural bem gelado.",
    radioTitulo: "Cobertura",
    opcoesRadio: ["Com sementinhas (padrão)", "Sem sementes"],
    checkTitulo: "Itens descartáveis",
    opcoesCheck: ["Enviar colher descartável"]
  },
  brownie: {
    key: "brownie",
    categoria: "sobremesa",
    nome: "Brownie de Chocolate",
    plural: "Brownies de Chocolate",
    preco: 10.00,
    emoji: "🍫",
    keywords: ["brownie", "chocolate"],
    descricao: "Brownie artesanal de chocolate meio amargo com casquinha crocante.",
    radioTitulo: "Temperatura",
    opcoesRadio: ["Temperatura ambiente (padrão)", "Aquecido"],
    checkTitulo: "Itens descartáveis",
    opcoesCheck: ["Enviar colher descartável"]
  }
});

const TAXA_ENTREGA = 5.00;

// ============================================================================
// 2. MÁQUINA DE ESTADOS & CARRINHO OFFLINE
// ============================================================================
const botState = {
  estadoAtual: "AGUARDANDO_PEDIDO", // AGUARDANDO_PEDIDO | MONTANDO_CARRINHO | PEDIDO_FINALIZADO
  itensCarrinho: [], // { key, nome, precoUnit, quantidade, observacoes, subtotal }
  taxaEntrega: 0.00,
  subtotalItens: 0.00,
  totalGeral: 0.00,
  ultimoDiagnostico: null
};

function recalcularEstado() {
  let subtotal = 0;
  botState.itensCarrinho.forEach((item) => {
    item.subtotal = Number((item.precoUnit * item.quantidade).toFixed(2));
    subtotal += item.subtotal;
  });

  botState.subtotalItens = Number(subtotal.toFixed(2));
  botState.taxaEntrega = botState.itensCarrinho.length > 0 ? TAXA_ENTREGA : 0.00;
  botState.totalGeral = Number((botState.subtotalItens + botState.taxaEntrega).toFixed(2));

  if (botState.itensCarrinho.length === 0) {
    botState.estadoAtual = "AGUARDANDO_PEDIDO";
  } else if (botState.estadoAtual !== "PEDIDO_FINALIZADO") {
    botState.estadoAtual = "MONTANDO_CARRINHO";
  }

  // Atualiza badges visuais no cabeçalho do chat e no Raio-X
  document.getElementById("badgeEstadoChat").innerText = botState.estadoAtual;
  document.getElementById("badgeTotalChat").innerText = `Carrinho: ${formatarMoeda(botState.totalGeral)}`;
  atualizarJsonEstadoRaioX();
}

// ============================================================================
// 3. MOTOR DETERMINÍSTICO DE NLU, GUARDRAILS E PARSING (ZERO LLM)
// ============================================================================

// Remove acentos e normaliza texto para análise léxica
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Proteção Anti-XSS estrita para qualquer texto exibido em HTML
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

// Guardrail Determinístico (Etapa 1 do Pipeline)
function verificarGuardrails(textoBruto, textoNormalizado) {
  if (textoBruto.length > 300) {
    return {
      aprovado: false,
      regra: "GUARDRAIL_TAMANHO_PAYLOAD",
      motivo: "Mensagem excedeu o limite máximo de 300 caracteres."
    };
  }

  const padroesBloqueados = [
    "ignore",
    "esqueca as regras",
    "system prompt",
    "aja como",
    "finja ser",
    "jailbreak",
    "codigo",
    "python",
    "javascript",
    "html",
    "piada",
    "poema",
    "receita de",
    "desconto de",
    "gratis",
    "de graca"
  ];

  const gatilhoEncontrado = padroesBloqueados.find((p) => textoNormalizado.includes(p));
  if (gatilhoEncontrado) {
    return {
      aprovado: false,
      regra: "GUARDRAIL_DESVIO_ESCOPO_OU_INJECAO",
      motivo: `Padrão fora de escopo/injeção detectado: "${gatilhoEncontrado}"`
    };
  }

  return {
    aprovado: true,
    regra: "GUARDRAIL_OK",
    motivo: "Entrada validada dentro do domínio do restaurante."
  };
}

// Identifica qual produto do catálogo corresponde a um trecho de texto
function detectarProdutoNoTrecho(trechoNorm) {
  // Ordem de prioridade evita ambiguidade (ex.: "mousse de maracuja" vs "suco de maracuja")
  const ordemPrioridade = ["mousse", "pudim", "brownie", "padrao", "fit", "vegana", "refri", "suco", "agua"];
  for (const key of ordemPrioridade) {
    const prod = CARDAPIO[key];
    if (prod.keywords.some((kw) => trechoNorm.includes(kw))) {
      return prod;
    }
  }
  return null;
}

// Extrai quantidade numérica ou por extenso
function extrairQuantidade(trechoNorm) {
  const matchDigito = trechoNorm.match(/\b(\d{1,2})\b/);
  if (matchDigito) {
    return Math.max(1, Math.min(20, parseInt(matchDigito[1], 10)));
  }

  const mapaExtenso = {
    "um": 1, "uma": 1,
    "dois": 2, "duas": 2,
    "tres": 3,
    "quatro": 4,
    "cinco": 5
  };

  for (const [palavra, valor] of Object.entries(mapaExtenso)) {
    const regex = new RegExp(`\\b${palavra}\\b`);
    if (regex.test(trechoNorm)) return valor;
  }

  return 1;
}

// Extrai personalizações (parenteses do modal + linguagem natural)
function extrairObservacoes(trechoOriginal, trechoNorm, produtoKey) {
  const obs = [];

  // 1. Captura observações estruturadas entre parênteses vindas do pop-up
  const matchParenteses = trechoOriginal.match(/\(([^)]+)\)/);
  if (matchParenteses) {
    matchParenteses[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .forEach((item) => obs.push(item));
  }

  // 2. Captura modificadores em linguagem natural fora dos parênteses
  const textoSemParenteses = trechoNorm.replace(/\([^)]*\)/g, " ");

  const regrasModificadores = [
    { regex: /\b(sem|tirar|retirar)\s+(cebola|arroz|feijao|farofa|pimenta|salada|legumes|pure|acucar|gelo|sementes)\b/g, format: (m) => m.replace(/^(tirar|retirar)/, "sem") },
    { regex: /\b(bem passado|mal passado|ao ponto)\b/g, format: (m) => `bife ${m}` },
    { regex: /\b(coca zero|coca-cola zero|zero)\b/g, format: () => "coca-cola zero" },
    { regex: /\b(coca cola|coca-cola|coca)\b/g, format: () => "coca-cola" },
    { regex: /\b(guarana)\b/g, format: () => "guaraná antarctica" },
    { regex: /\b(sprite)\b/g, format: () => "sprite" },
    { regex: /\b(laranja|limao|maracuja)\b/g, format: (m) => m },
    { regex: /\b(com gas|sem gas)\b/g, format: (m) => m },
    { regex: /\b(com adocante|adocante)\b/g, format: () => "com adoçante" },
    { regex: /\b(pouco sal|sem sal)\b/g, format: (m) => m },
    { regex: /\b(calda extra|aquecido|colher descartavel)\b/g, format: (m) => m }
  ];

  regrasModificadores.forEach((regra) => {
    const matches = textoSemParenteses.match(regra.regex);
    if (matches) {
      matches.forEach((m) => {
        const formatado = regra.format(m);
        // Evita duplicar sabor de suco no mousse de maracujá
        if (produtoKey === "mousse" && formatado === "maracuja") return;
        if (!obs.some((existente) => normalizarTexto(existente) === normalizarTexto(formatado))) {
          obs.push(formatado);
        }
      });
    }
  });

  return obs;
}

// Divide um pedido composto em sub-cláusulas preservando vírgulas dentro de parênteses
function dividirSubClausulas(textoBruto) {
  const protegido = textoBruto.replace(/\(([^)]+)\)/g, (_, conteudo) => {
    return "(" + conteudo.replace(/,/g, "§§") + ")";
  });

  return protegido
    .split(/\s+e\s+|\s*\+\s*|,/i)
    .map((parte) => parte.replace(/§§/g, ",").trim())
    .filter(Boolean);
}

// Pipeline completo de processamento de mensagem
function processarMensagemOffline(textoBruto) {
  const textoNorm = normalizarTexto(textoBruto);
  const tokens = textoNorm.split(/\s+/).filter(Boolean);

  // Etapa 1: Guardrail
  const checkGuardrail = verificarGuardrails(textoBruto, textoNorm);
  if (!checkGuardrail.aprovado) {
    const diag = {
      guardrail: checkGuardrail,
      intencao: "INTENT_BLOCKED_GUARDRAIL",
      tokens,
      entidades: [],
      regraAplicada: "Bloqueio imediato antes da execução de estado."
    };
    atualizarPainelRaioX(diag);

    return {
      tipo: "erro",
      html: `<p>🛡️ <strong>Guardrail Ativado:</strong> Desculpe, sou um assistente determinístico focado exclusivamente nos pedidos, cardápio e entrega do restaurante <strong>Sabor &amp; Cia</strong>.</p>`
    };
  }

  // Etapa 2: Classificação de Intenção
  if (/\b(limpar|zerar|cancelar pedido|apagar tudo|recomecar)\b/.test(textoNorm)) {
    botState.itensCarrinho = [];
    botState.estadoAtual = "AGUARDANDO_PEDIDO";
    recalcularEstado();

    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_CLEAR_CART",
      tokens,
      entidades: [],
      regraAplicada: "Reset completo do array itensCarrinho."
    });

    return {
      tipo: "info",
      html: `<p>🗑️ Carrinho limpo! Todos os itens foram removidos. Pode montar um novo pedido quando quiser.</p>`
    };
  }

  if (/\b(remover|tira o|tira a|tirar o|tirar a|excluir|cancela o|cancela a)\b/.test(textoNorm)) {
    const prodRemover = detectarProdutoNoTrecho(textoNorm);
    if (prodRemover) {
      const antes = botState.itensCarrinho.length;
      botState.itensCarrinho = botState.itensCarrinho.filter((i) => i.key !== prodRemover.key);
      recalcularEstado();

      atualizarPainelRaioX({
        guardrail: checkGuardrail,
        intencao: "INTENT_REMOVE_ITEM",
        tokens,
        entidades: [{ acao: "REMOVER", produto: prodRemover.nome }],
        regraAplicada: antes !== botState.itensCarrinho.length ? "Item removido do carrinho." : "Item não estava no carrinho."
      });

      if (antes !== botState.itensCarrinho.length) {
        return {
          tipo: "info",
          html: `<p>✅ Removi <strong>${escapeHtml(prodRemover.nome)}</strong> do seu pedido.</p>${gerarHtmlResumoCarrinho(false)}`
        };
      }
    }
  }

  if (/\b(finalizar|fechar pedido|concluir|confirmar pedido|pagar|encerrar)\b/.test(textoNorm)) {
    if (botState.itensCarrinho.length === 0) {
      atualizarPainelRaioX({
        guardrail: checkGuardrail,
        intencao: "INTENT_CHECKOUT_EMPTY",
        tokens,
        entidades: [],
        regraAplicada: "Bloqueio de fechamento com carrinho vazio."
      });
      return {
        tipo: "info",
        html: `<p>Seu carrinho ainda está vazio! Escolha ao menos uma marmita, bebida ou sobremesa antes de fechar o pedido.</p>`
      };
    }

    botState.estadoAtual = "PEDIDO_FINALIZADO";
    recalcularEstado();

    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_CHECKOUT_SUCCESS",
      tokens,
      entidades: botState.itensCarrinho,
      regraAplicada: "Transição de estado para PEDIDO_FINALIZADO com cálculo final."
    });

    return {
      tipo: "sucesso",
      html: `<p>🎉 <strong>Pedido confirmado com sucesso!</strong> Já enviamos para a cozinha do <strong>Sabor &amp; Cia</strong>:</p>${gerarHtmlResumoCarrinho(true)}`
    };
  }

  if (/\b(resumo|carrinho|quanto deu|meu pedido|total|ver pedido)\b/.test(textoNorm)) {
    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_VIEW_SUMMARY",
      tokens,
      entidades: botState.itensCarrinho,
      regraAplicada: "Leitura do estado atual sem mutação."
    });

    if (botState.itensCarrinho.length === 0) {
      return {
        tipo: "info",
        html: `<p>Seu carrinho está vazio no momento. Clique em um item do cardápio ao lado ou digite o que deseja pedir.</p>`
      };
    }

    return {
      tipo: "info",
      html: `<p>📋 Aqui está o resumo atual do seu pedido:</p>${gerarHtmlResumoCarrinho(false)}`
    };
  }

  if (/\b(cardapio|menu|opcoes|quais marmitas|o que tem|precos)\b/.test(textoNorm) && !detectarProdutoNoTrecho(textoNorm)) {
    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_VIEW_MENU",
      tokens,
      entidades: [],
      regraAplicada: "Consulta direta à tabela CARDAPIO."
    });

    return {
      tipo: "info",
      html: `
        <p>🍽️ <strong>Cardápio Oficial Sabor &amp; Cia:</strong></p>
        <ul class="list-disc ml-4 mt-1 space-y-0.5">
          <li><strong>Marmitas:</strong> Padrão (R$ 22,00), Fit (R$ 20,00), Vegana (R$ 18,00)</li>
          <li><strong>Bebidas:</strong> Refrigerante Lata (R$ 6,00), Suco Natural (R$ 8,00), Água (R$ 4,00)</li>
          <li><strong>Sobremesas:</strong> Pudim (R$ 9,00), Mousse (R$ 8,00), Brownie (R$ 10,00)</li>
        </ul>
        <p class="mt-1.5 text-[11px] text-gray-500">Taxa de entrega fixa: R$ 5,00.</p>
      `
    };
  }

  // Etapa 3: Extração de Itens e Quantidades (Pedido)
  const clausulas = dividirSubClausulas(textoBruto);
  const itensExtraidos = [];

  clausulas.forEach((clausulaOriginal) => {
    const clausulaNorm = normalizarTexto(clausulaOriginal);
    const produto = detectarProdutoNoTrecho(clausulaNorm);
    if (produto) {
      const qtd = extrairQuantidade(clausulaNorm);
      const obs = extrairObservacoes(clausulaOriginal, clausulaNorm, produto.key);
      itensExtraidos.push({
        key: produto.key,
        nome: produto.nome,
        precoUnit: produto.preco,
        quantidade: qtd,
        observacoes: obs
      });
    }
  });

  if (itensExtraidos.length > 0) {
    // Se o pedido anterior já estava finalizado, inicia um novo ciclo
    if (botState.estadoAtual === "PEDIDO_FINALIZADO") {
      botState.itensCarrinho = [];
      botState.estadoAtual = "MONTANDO_CARRINHO";
    }

    itensExtraidos.forEach((novoItem) => {
      const obsAssinatura = novoItem.observacoes.join(", ");
      const existente = botState.itensCarrinho.find(
        (item) => item.key === novoItem.key && item.observacoes.join(", ") === obsAssinatura
      );

      if (existente) {
        existente.quantidade += novoItem.quantidade;
      } else {
        botState.itensCarrinho.push({
          ...novoItem,
          subtotal: novoItem.precoUnit * novoItem.quantidade
        });
      }
    });

    recalcularEstado();

    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_ADD_ITEMS",
      tokens,
      entidades: itensExtraidos,
      regraAplicada: `${itensExtraidos.length} item(ns) extraído(s) e somado(s) ao carrinho.`
    });

    const listaConfirmada = itensExtraidos
      .map((i) => {
        const obsTxt = i.observacoes.length > 0 ? ` <em>(${escapeHtml(i.observacoes.join(", "))})</em>` : "";
        return `<li><strong>${i.quantidade}x ${escapeHtml(i.nome)}</strong>${obsTxt} — ${formatarMoeda(i.precoUnit * i.quantidade)}</li>`;
      })
      .join("");

    return {
      tipo: "sucesso",
      html: `
        <p>✅ <strong>Anotado!</strong> Adicionei ao seu pedido:</p>
        <ul class="list-disc ml-4 my-1">${listaConfirmada}</ul>
        ${gerarHtmlResumoCarrinho(false)}
        <p class="mt-1.5 text-[11px] text-gray-500">Deseja adicionar mais algum item ou clique em <strong>Fechar pedido</strong>?</p>
      `
    };
  }

  // Saudação simples
  if (/\b(oi|ola|bom dia|boa tarde|boa noite|e ai|opa)\b/.test(textoNorm)) {
    atualizarPainelRaioX({
      guardrail: checkGuardrail,
      intencao: "INTENT_GREETING",
      tokens,
      entidades: [],
      regraAplicada: "Saudação reconhecida sem alteração de carrinho."
    });

    return {
      tipo: "info",
      html: `<p>👋 Olá! Bem-vindo ao <strong>Sabor &amp; Cia</strong>! Escolha uma marmita, bebida ou sobremesa no cardápio ao lado ou me diga o que você gostaria de pedir hoje.</p>`
    };
  }

  // Fallback Determinístico (Fora de escopo / Não reconhecido)
  atualizarPainelRaioX({
    guardrail: {
      aprovado: false,
      regra: "FALLBACK_FORA_DE_ESCOPO",
      motivo: "Nenhuma intenção ou produto do cardápio identificado."
    },
    intencao: "INTENT_UNKNOWN_OUT_OF_SCOPE",
    tokens,
    entidades: [],
    regraAplicada: "Rejeição segura padrão (sem alucinação)."
  });

  return {
    tipo: "erro",
    html: `<p>Desculpe, sou um assistente focado exclusivamente nos pedidos do restaurante <strong>Sabor &amp; Cia</strong>. Não identifiquei nenhum item do nosso cardápio na sua mensagem. Como posso ajudar com seu pedido de hoje?</p>`
  };
}

// Gera a tabela HTML estruturada do carrinho
function gerarHtmlResumoCarrinho(finalizado) {
  if (botState.itensCarrinho.length === 0) return "";

  const linhas = botState.itensCarrinho
    .map((item) => {
      const obsHtml = item.observacoes.length > 0
        ? `<br><span class="text-[10px] text-gray-500">${escapeHtml(item.observacoes.join(", "))}</span>`
        : "";
      return `
        <tr>
          <td>${item.quantidade}x</td>
          <td><strong>${escapeHtml(item.nome)}</strong>${obsHtml}</td>
          <td>${formatarMoeda(item.subtotal)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <table class="receipt-table">
      <thead>
        <tr>
          <th>Qtd</th>
          <th>Item / Personalização</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${linhas}
        <tr>
          <td colspan="2">Taxa de entrega fixa</td>
          <td>${formatarMoeda(botState.taxaEntrega)}</td>
        </tr>
        <tr class="bg-emerald-50 font-bold text-emerald-900">
          <td colspan="2">${finalizado ? "TOTAL PAGO / A PAGAR" : "TOTAL PARCIAL"}</td>
          <td>${formatarMoeda(botState.totalGeral)}</td>
        </tr>
      </tbody>
    </table>
  `;
}

// ============================================================================
// 4. ATUALIZAÇÃO DO PAINEL VISUALIZADOR (RAIO-X DO MOTOR)
// ============================================================================
function atualizarPainelRaioX(diag) {
  botState.ultimoDiagnostico = diag;

  const elGuardrail = document.getElementById("rxGuardrailStatus");
  if (diag.guardrail.aprovado) {
    elGuardrail.className = "font-mono text-xs text-emerald-400 font-semibold";
    elGuardrail.innerText = `✅ ${diag.guardrail.regra}`;
  } else {
    elGuardrail.className = "font-mono text-xs text-rose-400 font-semibold";
    elGuardrail.innerText = `🛑 ${diag.guardrail.regra}`;
  }

  document.getElementById("rxIntentStatus").innerText = diag.intencao;
  document.getElementById("rxTokens").innerText = JSON.stringify(diag.tokens);

  const resumoEntidades = diag.entidades.length > 0
    ? JSON.stringify(diag.entidades, null, 2)
    : `Regra: ${diag.regraAplicada}\nDetalhe: ${diag.guardrail.motivo}`;
  document.getElementById("rxEntities").innerText = resumoEntidades;

  atualizarJsonEstadoRaioX();
}

function atualizarJsonEstadoRaioX() {
  const snapshot = {
    motor: "Deterministic-RuleEngine-v1 (Offline)",
    estadoAtual: botState.estadoAtual,
    itensCarrinho: botState.itensCarrinho,
    subtotalItens: botState.subtotalItens,
    taxaEntrega: botState.taxaEntrega,
    totalGeral: botState.totalGeral
  };
  document.getElementById("rxStateJson").innerText = JSON.stringify(snapshot, null, 2);
}

function trocarAbaRaioX(aba) {
  document.querySelectorAll(".rx-view").forEach((v) => v.classList.add("hidden"));
  document.getElementById(`rx-view-${aba}`).classList.remove("hidden");

  document.querySelectorAll(".rx-tab").forEach((t) => {
    t.className = "rx-tab text-[11px] font-semibold px-2.5 py-1 rounded text-slate-400 hover:text-white transition";
  });
  document.getElementById(`rx-tab-${aba}`).className = "rx-tab text-[11px] font-semibold px-2.5 py-1 rounded bg-red-600 text-white transition";
}

function toggleRaioX() {
  const painel = document.getElementById("painelRaioX");
  const btn = document.getElementById("btnToggleRaioX");
  const oculto = painel.classList.toggle("hidden");
  btn.innerText = oculto ? "🔬 Mostrar Raio-X" : "🔬 Ocultar Raio-X";
}

// ============================================================================
// 5. INTERFACE DO CHAT E POP-UP DE PERSONALIZAÇÃO
// ============================================================================
let itemSelecionadoKey = null;
let quantidadeModal = 1;

function sendMessage() {
  const inputElement = document.getElementById("userInput");
  const userText = inputElement.value.trim();
  if (!userText) return;

  appendUserMessage(userText);
  inputElement.value = "";

  const resposta = processarMensagemOffline(userText);
  appendBotMessage(resposta.html);
}

function enviarAtalho(texto) {
  const inputElement = document.getElementById("userInput");
  inputElement.value = texto;
  sendMessage();
}

function appendUserMessage(text) {
  const chatContainer = document.getElementById("chat");
  const msgDiv = document.createElement("div");
  msgDiv.className = "p-2.5 rounded-xl max-w-[85%] text-xs bg-red-600 text-white self-end rounded-tr-none shadow-sm";
  // Anti-XSS: entrada do usuário renderizada estritamente via innerText
  msgDiv.innerText = text;
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function appendBotMessage(safeHtml) {
  const chatContainer = document.getElementById("chat");
  const msgDiv = document.createElement("div");
  msgDiv.className = "p-3 rounded-xl max-w-[92%] text-xs bg-white border border-gray-200 text-gray-800 self-start rounded-tl-none shadow-sm leading-relaxed";
  msgDiv.innerHTML = safeHtml;
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function filtrarCategoria(categoria) {
  document.querySelectorAll(".categoria-secao").forEach((secao) => {
    if (categoria === "todos" || secao.id === `secao-${categoria}`) {
      secao.classList.remove("hidden");
    } else {
      secao.classList.add("hidden");
    }
  });

  document.querySelectorAll(".categoria-tab").forEach((tab) => {
    if (tab.id === `tab-${categoria}`) {
      tab.className = "categoria-tab bg-red-600 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm transition shrink-0";
    } else {
      tab.className = "categoria-tab bg-white text-gray-700 border border-gray-200 hover:border-red-300 text-xs font-semibold px-3.5 py-2 rounded-full transition shrink-0";
    }
  });
}

function abrirModalItem(key) {
  const item = CARDAPIO[key];
  if (!item) return;

  itemSelecionadoKey = key;
  quantidadeModal = 1;

  document.getElementById("modalEmoji").innerText = item.emoji;
  document.getElementById("modalTitulo").innerText = item.nome;
  document.getElementById("modalPrecoUnitario").innerText = `${formatarMoeda(item.preco)} cada`;
  document.getElementById("modalDescricao").innerText = item.descricao;
  document.getElementById("modalObs").value = "";
  document.getElementById("modalQuantidade").innerText = "1";
  document.getElementById("modalSubtotal").innerText = formatarMoeda(item.preco);

  const secaoRadio = document.getElementById("modalSecaoRadio");
  const radioLista = document.getElementById("modalRadioLista");
  radioLista.innerHTML = "";

  if (item.opcoesRadio && item.opcoesRadio.length > 0) {
    secaoRadio.classList.remove("hidden");
    document.getElementById("modalRadioTitulo").innerText = item.radioTitulo;

    item.opcoesRadio.forEach((opcao, index) => {
      const label = document.createElement("label");
      label.className = "flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-50";

      const span = document.createElement("span");
      span.className = "text-xs text-gray-700";
      span.innerText = opcao;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "opcaoUnicaItem";
      input.value = opcao;
      input.className = "accent-red-600";
      if (index === 0) input.checked = true;

      label.appendChild(span);
      label.appendChild(input);
      radioLista.appendChild(label);
    });
  } else {
    secaoRadio.classList.add("hidden");
  }

  const secaoCheck = document.getElementById("modalSecaoCheck");
  const checkLista = document.getElementById("modalCheckLista");
  checkLista.innerHTML = "";

  if (item.opcoesCheck && item.opcoesCheck.length > 0) {
    secaoCheck.classList.remove("hidden");
    document.getElementById("modalCheckTitulo").innerText = item.checkTitulo;

    item.opcoesCheck.forEach((opcao) => {
      const label = document.createElement("label");
      label.className = "flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-2 cursor-pointer hover:bg-gray-50";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = "opcaoMultiplaItem";
      input.value = opcao;
      input.className = "accent-red-600 rounded";

      const span = document.createElement("span");
      span.className = "text-xs text-gray-700";
      span.innerText = opcao;

      label.appendChild(input);
      label.appendChild(span);
      checkLista.appendChild(label);
    });
  } else {
    secaoCheck.classList.add("hidden");
  }

  document.getElementById("modalItem").classList.remove("hidden");
}

function fecharModalItem() {
  document.getElementById("modalItem").classList.add("hidden");
  itemSelecionadoKey = null;
}

function alterarQuantidade(delta) {
  if (!itemSelecionadoKey) return;
  const item = CARDAPIO[itemSelecionadoKey];
  quantidadeModal = Math.max(1, Math.min(20, quantidadeModal + delta));
  document.getElementById("modalQuantidade").innerText = String(quantidadeModal);
  document.getElementById("modalSubtotal").innerText = formatarMoeda(item.preco * quantidadeModal);
}

function confirmarConfiguracaoNoChat() {
  if (!itemSelecionadoKey) return;
  const item = CARDAPIO[itemSelecionadoKey];
  const detalhes = [];

  const radioSelecionado = document.querySelector('input[name="opcaoUnicaItem"]:checked');
  if (radioSelecionado && !radioSelecionado.value.includes("(padrão)")) {
    detalhes.push(radioSelecionado.value.toLowerCase());
  }

  document.querySelectorAll('input[name="opcaoMultiplaItem"]:checked').forEach((cb) => {
    detalhes.push(cb.value.toLowerCase());
  });

  const obsTexto = document.getElementById("modalObs").value.trim().replace(/[<>()]/g, "");
  if (obsTexto) {
    detalhes.push(obsTexto);
  }

  const nomeItem = quantidadeModal === 1 ? item.nome : item.plural;
  let textoItem = `${quantidadeModal} ${nomeItem}`;
  if (detalhes.length > 0) {
    textoItem += ` (${detalhes.join(", ")})`;
  }

  const inputElement = document.getElementById("userInput");
  const textoAtual = inputElement.value.trim();

  let novoTexto = "";
  if (!textoAtual) {
    novoTexto = `Quero ${textoItem}`;
  } else if (textoAtual.startsWith("Quero ")) {
    novoTexto = `${textoAtual} e ${textoItem}`;
  } else {
    novoTexto = `${textoAtual} + ${textoItem}`;
  }

  if (novoTexto.length > 300) {
    alert("Seu pedido combinado atingiu o limite de 300 caracteres. Envie os itens atuais primeiro!");
    return;
  }

  inputElement.value = novoTexto;
  fecharModalItem();
  inputElement.focus();

  inputElement.classList.add("ring-2", "ring-emerald-500", "bg-emerald-50");
  setTimeout(() => {
    inputElement.classList.remove("ring-2", "ring-emerald-500", "bg-emerald-50");
  }, 900);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    fecharModalItem();
  }
});

// Inicializa o painel Raio-X no carregamento da página
atualizarJsonEstadoRaioX();
