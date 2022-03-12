<h1 align="center">
  <img alt="Rocket.Q" title="Rocket.Q" src=".github/rocketq.png" width="220px" />
</h1>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=49AA26&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Rocket.Q" src=".github/capa.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- EJS
- Express
- SQLite

## 💻 Projeto

O Rocket.Q é uma aplicação de interação através de perguntas, sendo possível criar uma sala para internautas anônimos fazerem perguntas e o criador da sala em posse de uma senha gerenciar essas perguntas e marcar como lidas.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/community/file/1009821158959690135/Roquet.q). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](.github/LICENSE.md) para mais detalhes.

---

## 1ª Aula

- layout do site html
  - Criar arquivo home.html
  - Criar pasta/arquivos styles/home.css e global.css
  - Criar pasta assets
  - Baixar os SVG da página principal [baixar](https://www.figma.com/community/file/1009821158959690135/Roquet.q)
- Criar repositório Rocket.Q no github.
  - git init
  - git add .
  - git commit -m "Aula 01" & git branch -M aula01 & git remote add origin git@github.com:mazera3/Rocket.Q.git & git push -u origin aula01
- Para atualizar: git add . & git commit -m "XXX" & git branch -M XXX & git push -u origin XXX

## 2ª Aula

- Crial ball: [CSS-Clip](https://bennettfeely.com/clippy/)
<pre>
  < div class="ball top" >< /div >
</pre>
- Nova página: creat-pass.html (copia de home.html)
- Novas páginas: room.html e room.css
- git add .
- git commit -m "Aula 02"
- git branch -M aula02
- git push -u origin aula02

## 3ª Aula
- Criar modal.css

## Tecnologias
- Gerar texto aleatório: [Lorem Ipsum](https://www.lipsum.com/)
- Converter hexadecimal em rgb: [peko-step](https://www.peko-step.com/pt/tool/tfcolor.html)

## Repositório
- git add .
- git commit -m "Aula 03"
- git branch -M aula03
- git push -u origin aula03

---

## 4ª Aula
- mover os arquivos para uma pasta htmls
- Iniciar um projeto nodejs

# Comandos iniciais nodejs
- Verificar a versão nodejs: node -v -> v16.13.2
- Iniciar o projeto com npm:  npm init -y
- Instala njs [Embedded JavaScript templates](https://www.npmjs.com/package/ejs) e express: npm i ejs express
- Fechar o Live Server do vscode
- Criar pasta src
  - Criar aruivo src/server.js
- Instalar env: npm install dotenv e criar arquivo .env
  - Criar variavel PORT e usar em `process.env.PORT`

  ## Rodando o porojeto
  - Criar script: "start": "node src/server.js" em package.json
  - Rodar: npm start (ou npm rum start)
  
  # Rotas
  - Criar pasta/arquivo: views/index.ejs
  - Criar arquivo src/route.js
  - Criar pasta public e mover a pasta /styles e /assets para dentro, renomear /assets para /images.
  - Instalar nodemon: npm i nodemon -D e alterar script: "start": "nodemon src/server.js"
  - Iniciar: npm start ou node .
  - mover arquivos .html para a pasta /src/views

  # scripts
  - Criar pasta/arquivo public/scripts/modal.js e main.js
  - Criar rotas no script
  - Criar src/controllers/QuestionController.js e RoomController.js
  - Instalar sqlite e sqlite3: npm i sqlite sqlit3
  - Criar pasta src/db e db/config.js db/init.js
  - Template string: `xxx`
  - Criar script initdb e rodar: `npm run initdb`
  - Criar função de números aleatórios:
    - Math.floor(Math.random() * 10) --> Gera nº aleatórios de 0 a 9

## 5ª Aula
- Terminar RoomController.js e room.ejs
- Criar src/views/passincorrect.ejs

## Repositório
- git add .
- git commit -m "Aula 05"
- git branch -M aula05
- git push -u origin aula05

<pre>
public/
┣ images/
┃ ┣ btn/
┃ ┃ ┣ check.svg
┃ ┃ ┣ copy.svg
┃ ┃ ┣ enter-room.png
┃ ┃ ┣ enter-room.svg
┃ ┃ ┣ lock.svg
┃ ┃ ┣ trash.svg
┃ ┃ ┣ user.svg
┃ ┃ ┣ users-blue.svg
┃ ┃ ┗ users-white.svg
┃ ┣ avatar.svg
┃ ┣ favincon.ico
┃ ┣ favincon.png
┃ ┣ home-bg-img.svg
┃ ┣ logo.svg
┃ ┗ noquestions.svg
┣ scripts/
┃ ┣ main.js
┃ ┗ modal.js
┣ styles/
┃ ┣ global.css
┃ ┣ home.css
┃ ┣ modal.css
┃ ┗ room.css
┗ favicon.ico
</pre>