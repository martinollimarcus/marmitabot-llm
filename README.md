# 🍱 MarmitaBot - Chatbot Client-Side com Guardrails de Segurança

Aplicação web desenvolvida 100% client-side (sem backend/servidor) para atendimento e vendas do restaurante "Sabor & Cia", hospedada no GitHub Pages e integrada à LLM via OpenRouter.

## 🔗 Links da Atividade
- **Repositório GitHub:** `https://github.com/SEU_USUARIO/SEU_REPOSITORIO`
- **Aplicação no GitHub Pages:** `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

## 🎯 Funcionalidades Atendidas
- [x] Apresentação do cardápio do dia e preços unitários por prato.
- [x] Escolha de itens via texto em linguagem natural.
- [x] Customização de ingredientes, temperos e ponto de cozimento (ex.: remover cebola, bife bem passado).
- [x] Cálculo automático e discriminado do valor total (itens + taxa de entrega de R$ 5,00).
- [x] Execução inteiramente client-side (HTML/CSS/JS) sem servidor intermediário.
- [x] Sistema robusto de Guardrails contra Prompt Injection e Jailbreak.

## 🛡️ Camadas de Segurança e Guardrails Implementados
1. **Delimitação via Tags XML (`<mensagem_usuario>`):** O input do cliente é isolado em tags XML antes de ser enviado à LLM, instruindo o modelo a nunca executar comandos contidos dentro do bloco.
2. **Temperatura Determinística (`temperature: 0.0`):** Elimina alucinações e garante adesão estrita às instruções e preços do cardápio.
3. **Limitação de Payload no Frontend (`maxlength="300"`):** Impede o envio de prompts extensos frequentemente utilizados em ataques de jailbreak baseados em dramatização (*roleplay*).
4. **Sanitização DOM (Anti-XSS):** Exibição de mensagens via `innerText` no JavaScript para impedir a injeção e execução de scripts maliciosos na interface.

## 🚀 Como Executar
1. Clone este repositório.
2. Abra o arquivo `index.html` em qualquer navegador.
3. Insira sua chave da API do OpenRouter no campo superior para iniciar o chat.