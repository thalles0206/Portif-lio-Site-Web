# DBZHISTORY

Site de fã sobre a história de Dragon Ball: resumo das sagas (Dragon Ball, Z e Super), seção de What-ifs e um quiz com 15 perguntas.

## Estrutura
```
index.html   página principal
style.css    estilos (tema claro/escuro automático)
quiz.js      perguntas e lógica do quiz
img/         imagens do site
```

## Como rodar
Abra o `index.html` no navegador. Não precisa instalar nada.

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta.
2. Vá em **Settings > Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch `main` e pasta `/ (root)`.
4. Salve. Em alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

## Como editar o quiz
Abra `quiz.js` e mude a lista `perguntas`. Cada item tem `pergunta`, `imagem` (opcional), `opcoes` e `correta` (posição da resposta certa, começando em 0).

Dragon Ball © Akira Toriyama. Projeto de fã, sem fins comerciais.
