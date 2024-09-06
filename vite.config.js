import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    preact(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Tegar | Portofolio',
        },
      },
    }),
  ],
  base: '/',
  build: {
    outDir: 'docs',
  },
});