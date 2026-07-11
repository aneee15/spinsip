# Spin & Sip

Jogo de festa mobile-first, feito com Next.js, React, TypeScript, Tailwind CSS e Framer Motion. Não requer conta nem servidor de dados; nomes, preferências e sessão ficam apenas no dispositivo.

## Executar localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Para validar a versão de produção:

```bash
npm run build
npm start
```

## Instalar no iPhone

Publica o projeto num domínio HTTPS (por exemplo, Vercel), abre-o no Safari e escolhe **Partilhar → Adicionar ao ecrã principal**. O manifest e o service worker permitem a abertura em modo standalone e funcionamento offline após a primeira visita.

## Publicar

1. Coloca este diretório num repositório Git.
2. Importa o repositório na Vercel (ou noutro alojamento compatível com Next.js).
3. Usa `npm run build` como comando de build e `npm start` como comando de arranque, quando necessário.

O conteúdo do jogo pode ser ampliado em `src/lib/content.ts`; os tipos extensíveis estão em `src/lib/types.ts`.
