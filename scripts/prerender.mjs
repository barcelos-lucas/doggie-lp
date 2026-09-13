import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const template = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', `<div id="root">${renderToString(React.createElement(App))}</div>`));
  console.log('Static HTML prerendered successfully.');
} finally {
  await server.close();
}
