import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const template = await readFile('dist/index.html', 'utf8');
  const renderPage = (path) => template.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App, { initialPath: path }))}</div>`);
  await writeFile('dist/index.html', renderPage('/'));
  for (const code of [404, 500]) {
    const html = renderPage(`/${code}`)
      .replace('<title>Doggie Estética Animal | cuidado que encanta</title>', `<title>${code} | Doggie Estética Animal</title>`)
      .replace('<meta name="description" content="Cuidado que encanta: estética animal com atendimento individual, técnica e tranquilidade no Demarchi, São Bernardo do Campo." />', `<meta name="description" content="${code === 404 ? 'Página não encontrada' : 'Erro temporário'} na Doggie Estética Animal." />`);
    await writeFile(`dist/${code}.html`, html);
    await mkdir(`dist/${code}`, { recursive: true });
    await writeFile(`dist/${code}/index.html`, html);
  }
  console.log('Static HTML and branded error pages prerendered successfully.');
} finally {
  await server.close();
}
