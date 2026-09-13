# Doggie — nova landing page

## Direção

Uma página acolhedora, com presença visual e leitura fácil no celular. A logo
define a paleta: vermelho profundo nos botões, na marca e nos títulos em destaque;
bordô nos estados de interação; dourado nos detalhes; creme e caramelo nos fundos.
As fotografias ilustrativas também foram harmonizadas com essa família de cores.
Fraunces nos títulos retoma a linguagem editorial da Clorofila; DM Sans mantém
clareza nos textos e botões. Mascote da identidade anterior preservado no cabeçalho.

### Cores do sistema

| Token | Cor | Uso |
| --- | --- | --- |
| primary | #981F18 | Vermelho da família da logo: ações e destaques |
| primary-hover | #711711 | Bordô: interação |
| paper | #FFF8EB | Creme: fundo principal |
| ink | #3C211B | Marrom profundo: texto principal |
| muted | #74594A | Marrom: texto de apoio |
| gold-ink | #936822 | Dourado escuro: ícones e detalhes legíveis |
| gold-border | #CFA96A | Dourado claro: contornos decorativos |
| surface / surface-warm / surface-deep | #FCF2E1 / #F7EAD3 / #F0DDBA | Fundos em creme e caramelo |

Valores adaptados visualmente da logo para uso digital, sem alegar um manual
de marca preexistente. Todos os componentes usam tokens semânticos em CSS.

## Conversão

O primeiro CTA aparece antes da foto no celular. Contato fixo na parte inferior,
serviços com mensagens específicas e CTA após explicação do primeiro atendimento.
Não há formulário intermediário nem promessa de disponibilidade automática.
Os links abrem uma conversa com texto pré-preenchido; o usuário decide enviar.

## Conteúdo e procedência

- Endereço e WhatsApp confirmados pelo proprietário em 12/09/2026.
- Horários, serviços, pacotes e Instagram vieram da versão anterior do site.
- Horários precisam de confirmação antes da publicação.
- As duas fotografias são conceituais, geradas por IA, e identificadas como
  ilustrativas na interface. Não representam clientes nem o espaço real.
- Não foram publicadas avaliações ou notas fictícias. O componente aceita
  avaliações verificadas em `src/content.js`; enquanto vazio, exibe um convite
  para conhecer a marca no Instagram. Inserir depoimentos e URL oficial do Google
  é a pendência de conteúdo para concluir a prova social solicitada.
- Fotografias reais do atendimento e da equipe são a próxima melhoria editorial.

## Responsividade e acessibilidade

Layout base para celulares; mudanças em 640px e 1024px. Texto sem dependência
de animações, foco visível, link de salto, menu com Escape, perguntas com `details`
nativo e respeito a movimento reduzido. Imagens com dimensões e formatos WebP;
fontes hospedadas pelo próprio site. Conteúdo pré-renderizado no build.

## Referências

- https://d862-bistro-clorofila.demos-673.pages.dev/
- https://d899-legado-parrilla.demos-673.pages.dev/
- https://barcelos-lucas.github.io/doggie/
