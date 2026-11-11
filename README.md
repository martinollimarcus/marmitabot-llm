# 🍱 MarmitaBot - Chatbot com Agente LLM Client-Side

Aplicação web desenvolvida 100% client-side (sem backend/servidor) para atendimento e vendas de marmitas, hospedada no GitHub Pages.

## 🔗 Links da Atividade
- **Repositório:** `https://github.com/SEU_USUARIO/marmita-bot-llm`
- **Aplicação Rodando (GitHub Pages):** `https://SEU_USUARIO.github.io/marmita-bot-llm/`

## 🎯 Funcionalidades Implementadas
- [x] Apresentação do cardápio do dia e preços unitários.
- [x] Seleção de itens por texto natural.
- [x] Alteração de temperos e ponto de cozimento.
- [x] Cálculo automático do total (itens + entrega de R$ 5,00).
- [x] Guardrails contra Prompt Injection e Jailbreak via System Prompt.
- [x] Execução 100% Client-Side.

## 🛡️ Guardrails Aplicados
O System Prompt contém regras rígidas para impedir alteração de escopo (system override) e limitar a atuação do bot exclusivamente ao restaurante.

## 🚀 Como Executar Localmente
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Insira sua chave de API da OpenAI no campo superior para iniciar as conversas.