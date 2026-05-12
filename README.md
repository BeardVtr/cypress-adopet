# Testes Automatizados com Cypress — Adopet

Projeto de estudo de testes automatizados usando **Cypress** na aplicação [Adopet](https://adopet-frontend-cypress.vercel.app/), uma plataforma de adoção de animais.

## Testes implementados

### Testes de Interface (E2E)
| Arquivo | Descrição |
|--------|-----------|
| `tela-principal.cy.js` | Validações da página inicial |
| `cadastro-correto.cy.js` | Fluxo de cadastro com dados válidos |
| `cadastro-incorreto.cy.js` | Validações de campos inválidos no cadastro |
| `casastro-massa.cy.js` | Cadastro em massa usando fixture com múltiplos usuários |
| `login-correto.cy.js` | Fluxo de login com credenciais válidas |
| `login-incorreto.cy.js` | Validações de login com credenciais inválidas |
| `testes-de-páginas.cy.js` | Navegação entre páginas |

### Testes de API
| Arquivo | Descrição |
|--------|-----------|
| `api-perfil.cy.js` | Consulta de perfil do adotante via API REST |
| `api-mensagens.cy.js` | Consulta de mensagens do adotante via API REST |

## Tecnologias
- [Cypress](https://www.cypress.io/) 13.x
- [Mochawesome](https://github.com/adamgruber/mochawesome) — relatórios de testes

## Como executar

### Pré-requisitos
- Node.js instalado
- Conta criada na aplicação Adopet

### Instalação
```bash
npm install
```

### Configuração de ambiente
Crie o arquivo `cypress.env.json` a partir do exemplo:
```bash
cp cypress.env.json.example cypress.env.json
```
Edite o arquivo e insira um token JWT válido obtido após login na API.

### Executar os testes
```bash
# Modo interativo (interface gráfica)
npx cypress open

# Modo headless (terminal)
npx cypress run
```

## Estrutura do projeto
```
cypress/
├── e2e/          # Arquivos de teste
├── fixtures/     # Massa de dados (usuarios.json)
└── support/      # Comandos customizados
```
