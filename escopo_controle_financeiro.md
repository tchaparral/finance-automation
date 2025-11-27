# Sistema Pessoal de Controle Financeiro — Escopo e Roadmap

## 🧩 Escopo do Projeto

**Objetivo:** Criar um sistema pessoal de controle financeiro automatizado e inteligente, com captura de dados multi‑canal, integração via n8n e visualização em painel web.

### 1. Captura de Dados
- Entrada via **WhatsApp** → n8n → API
- Transcrição de **áudio/voz**
- Leitura de **faturas e e‑mails** (via Gmail API)
- Input manual por **painel web**

### 2. Armazenamento e Backend
- **Stack:** NestJS + Prisma + Postgres
- **Modelos:** User, Account, Transaction, Category, Recurring
- **Endpoints REST:** `/transactions`, `/cashflow`, `/forecast`
- Controle de parcelas, despesas fixas, receitas e projeções mensais

### 3. Inteligência e Automação
- Alertas de estouro de orçamento
- Projeção de saldo até o fim do mês
- Radar de assinaturas e despesas recorrentes
- Cálculo de *“quanto posso gastar hoje”*
- Score de saúde financeira mensal

### 4. Interfaces
- **Dashboard web (Next.js + Tailwind)** para análise e edição
- **Bot no Discord** ou WhatsApp para interação rápida
- **Relatório semanal automatizado** enviado via WhatsApp

### 5. Stack Técnica
- **Backend:** NestJS + Prisma + Postgres (Docker)
- **Frontend:** Next.js + Tailwind + Recharts
- **Automação:** n8n (WhatsApp, Gmail, agendamentos)
- **Infra:** Deploy em Vercel + backup automático do DB

---

## 🚀 Roadmap de Desenvolvimento

### **Fase 0 — Esqueleto**
- [ ] Criar schema Prisma (User, Account, Transaction, Category, Recurring)
- [ ] Subir container Postgres
- [ ] Subir API NestJS com rotas `/transactions` básicas

### **Fase 1 — Captura Rápida**
- [ ] Integrar WhatsApp → n8n → API (POST /transactions)
- [ ] Registro de gasto em tempo real
- [ ] Implementar validações básicas

### **Fase 2 — Dashboard Web**
- [ ] Criar frontend Next.js (read‑only)
- [ ] Listar transações do mês
- [ ] Visualizar gastos por categoria e meta mensal
- [ ] Exibir saldo diário projetado

### **Fase 3 — Alertas Inteligentes**
- [ ] Configurar workflows no n8n (alertas diários)
- [ ] Cálculo automático de projeção e status do mês
- [ ] Envio de mensagens proativas via WhatsApp

### **Fase 4 — Bot de Consulta**
- [ ] Criar bot no Discord com comandos `/saldo`, `/gasto`, `/projeção`
- [ ] Respostas com dados em tempo real
- [ ] Integração futura com LLM (linguagem natural)

### **Fase 5 — Refinamento e Insights**
- [ ] Implementar relatórios mensais automáticos
- [ ] Adicionar visualização de dívidas e investimentos
- [ ] Análise de assinaturas “zumbi”
- [ ] Geração de insights de economia

---

📅 **Data de planejamento:** 29/10/2025
👤 **Autor:** Chaparral + Cleitin (GPT‑5)

