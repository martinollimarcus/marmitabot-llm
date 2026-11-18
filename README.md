# 🍱 MarmitaBot — Vitrine Delivery & Chatbot Determinístico Offline (Caixa-Branca)

Aplicação web desenvolvida **100% client-side** (HTML, Tailwind CSS e JavaScript puro), hospedada no GitHub Pages, que simula a página de pedidos da marmitaria **"Sabor & Cia"**. 

O sistema combina uma **vitrine interativa estilo delivery** (com pop-up de personalização de itens) a um **chatbot determinístico baseado em regras (NLU + Máquina de Estados)** que funciona **totalmente offline, sem uso de LLMs e sem necessidade de API Keys**, oferecendo um painel **Raio-X do Motor** para visualização em tempo real do processamento interno.

---

## 🔗 Links da Atividade
- **Repositório GitHub:** `https://github.com/martinollimarcus/marmitabot-llm`
- **Aplicação no GitHub Pages:** `https://martinollimarcus.github.io/marmitabot-llm/`

---

## 🧠 Decisão Arquitetural: Por que 100% Offline (Sem LLM)?
Em aplicações puramente *client-side*, o uso de APIs externas de LLMs expõe chaves de acesso no navegador e mantém o sistema sujeito a ataques probabilísticos de *Prompt Injection* ou alucinações matemáticas. Para resolver esses problemas, o projeto foi estruturado como um **motor determinístico caixa-branca**:
- **Zero exposição de credenciais:** Não exige chaves de API (`API Key`) nem conexão com servidores externos.
- **Guardrails inquebráveis:** Sem um modelo gerador de texto livre, torna-se impossível manipular o sistema para alterar preços, conceder descontos ou fugir do escopo do restaurante.
- **Precisão matemática absoluta:** Todos os cálculos de carrinho, quantidades e taxa de entrega são processados por código estruturado.
- **Observabilidade total:** O painel **Raio-X do Motor** exibe ao vivo cada etapa do processamento da mensagem.

---

## 🎯 Funcionalidades Principais

### 1. Vitrine Estilo Delivery & Modal de Personalização
- **Filtro por Categorias:** Navegação rápida entre **Todos (9)**, **Marmitas (3)**, **Bebidas (3)** e **Sobremesas (3)**.
- **Pop-up Interativo:** Ao clicar em qualquer card, o cliente escolhe ponto da carne, sabores, remoção de ingredientes (*sem cebola*, *sem arroz*, *sem açúcar*, etc.), acompanhamentos grátis, observações extras e quantidade, preenchendo o pedido automaticamente no chat.

### 2. Chatbot Determinístico (Motor NLU Offline)
- **Normalização Léxica e Tokenização:** Remoção de acentos, padronização de caracteres e segmentação de tokens.
- **Suporte a Pedidos Compostos:** Interpreta múltiplos itens e modificadores na mesma frase (ex.: *"Quero 2 Marmitas Padrão (bife bem passado, sem cebola) e 1 Suco Natural 500ml (laranja, sem açúcar)"*).
- **Máquina de Estados:** Controla o ciclo de vida do atendimento (`AGUARDANDO_PEDIDO` → `MONTANDO_CARRINHO` → `PEDIDO_FINALIZADO`) e gera o recibo discriminado com taxa de entrega fixa de **R$ 5,00**.

### 3. Painel "Raio-X do Motor" (Visualizador em Tempo Real)
- **Aba 1 — Pipeline NLU:** Exibe o status dos guardrails, a intenção classificada (`INTENT_ADD_ITEMS`, `INTENT_BLOCKED_GUARDRAIL`, etc.), os tokens gerados e as entidades extraídas.
- **Aba 2 — Estado JSON:** Mostra o objeto completo do carrinho, subtotais e estado atual da aplicação em tempo real.
- **Aba 3 — Guardrails:** Documenta as regras de segurança ativas no motor.

---

## 🍽️ Cardápio Oficial da Loja

| Categoria | Item | Preço Unitário |
| :--- | :--- | :---: |
| **Marmitas** | Marmita Padrão (Bife Acebolado, Arroz, Feijão e Farofa) | R$ 22,00 |
| **Marmitas** | Marmita Fit (Frango Grelhado, Purê de Batata-Doce e Legumes) | R$ 20,00 |
| **Marmitas** | Marmita Vegana (Omelete de Grão-de-Bico com Salada) | R$ 18,00 |
| **Bebidas** | Refrigerante Lata 350ml (Coca-Cola, Zero, Guaraná ou Sprite) | R$ 6,00 |
| **Bebidas** | Suco Natural 500ml (Laranja, Limão ou Maracujá) | R$ 8,00 |
| **Bebidas** | Água Mineral 500ml (Sem gás ou Com gás) | R$ 4,00 |
| **Sobremesas** | Pudim de Leite Condensado | R$ 9,00 |
| **Sobremesas** | Mousse de Maracujá | R$ 8,00 |
| **Sobremesas** | Brownie de Chocolate | R$ 10,00 |
| **Entrega** | Taxa fixa de entrega (qualquer bairro) | **R$ 5,00** |

---

## 🛡️ Camadas de Segurança Implementadas
1. **Filtro Determinístico de Escopo e Injeção:** Bloqueia imediatamente tentativas de desvio de contexto ou palavras-chave de ataque antes de qualquer alteração no estado da aplicação.
2. **Catálogo Imutável (`Object.freeze`):** Os preços e produtos são congelados em memória, impedindo qualquer modificação em tempo de execução.
3. **Limitação de Payload (`maxlength="300"`):** Restringe o tamanho máximo das mensagens enviadas no frontend.
4. **Sanitização Estrita (Anti-XSS):** Entradas do usuário são renderizadas via `innerText` e observações passam por escape de caracteres HTML (`escapeHtml`), bloqueando injeção de scripts.

---

## 🚀 Como Executar
1. Acesse diretamente pelo GitHub Pages: `https://martinollimarcus.github.io/marmitabot-llm/`
2. Ou clone este repositório e abra o arquivo `index.html` em qualquer navegador (funciona 100% offline, sem necessidade de servidor ou chave de API).
