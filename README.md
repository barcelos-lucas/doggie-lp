# Doggie Estética Animal

Landing page mobile first em React + Vite, preparada para Cloudflare Pages.
Conteúdo pré-renderizado no build, fontes locais e imagens WebP responsivas.

## Executar

Requer Node 24 (ou >=22.12).

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

O build gera `dist/`, pronto para hospedagem estática. O comando de build também
pré-renderiza o React no HTML para leitura imediata e indexação. Não abra
`index.html` diretamente no disco; use o servidor Vite.

## Publicar no Cloudflare Pages

No painel Cloudflare, conecte o repositório e configure:

- Diretório raiz: a raiz deste projeto (a pasta `doggie-lp` se conectar um monorepo).
- Comando de build: `npm run build`.
- Diretório de saída: `dist`.
- Versão de Node: 24, registrada em `.node-version`.

Alternativa para upload do build com Wrangler autenticado:

```sh
npx wrangler pages deploy dist --project-name doggie-lp
```

Não foi realizado deploy. O site publicado no GitHub Pages permanece como estava.
As URLs de assets pressupõem hospedagem na raiz do domínio Cloudflare.
Para voltar a publicar em `/doggie/` no GitHub Pages, é necessário adaptar a base.

Documentação: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

## Editar conteúdo

- `src/content.js`: telefone, endereço, horários, serviços, perguntas e avaliações.
- `src/App.jsx`: componentes e seções.
- `src/styles.css`: identidade visual e breakpoints.
- `index.html`: metadados e dados estruturados. Ao alterar o contato, sincronize
  os metadados com `src/content.js`.
- `public/images/`: imagens utilizadas na página.
- `scripts/prerender.mjs`: geração de HTML estático a partir dos componentes.
- `tests/contact.test.mjs`: integridade do WhatsApp, endereço e avaliações.

Projeto independente em F:\www\doggie-lp. A versão anterior permanece em F:\www\doggie.

## Pendências editoriais antes da publicação

1. Inserir avaliações reais em `reviews` e o link oficial em `reviewsProfileUrl`,
   dentro de `src/content.js`. Campos: `name`, `text`, `rating`, `date`, `url`.
   O componente mostra depoimentos quando o array recebe conteúdo. Enquanto vazio,
   aparece um convite para conhecer o Instagram, sem nota ou depoimento fictício.
2. Confirmar horários, mantidos do site anterior: segunda a sexta, 7h às 12h e 13h às 18h.
3. As fotografias são ilustrativas, geradas por IA. Recomenda-se substituí-las por
   fotos reais da Doggie e revisar os textos alternativos e legendas correspondentes.
4. Após definir o domínio final, adicionar canonical e uma URL absoluta de imagem
   Open Graph em `index.html`.

Endereço e WhatsApp foram confirmados pelo proprietário em 12/09/2026.
Não há analytics ou coleta de dados instalada. `data-cta` identifica a posição
 dos botões para uma futura medição de conversão. Abrir um link não envia a mensagem.

Detalhes da direção visual e procedência do conteúdo em `DESIGN.md`.
