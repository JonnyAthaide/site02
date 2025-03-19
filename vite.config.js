import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';
import path from 'path';
import { readFileSync } from 'fs';

// const varsContent = readFileSync(path.resolve(__dirname, 'src/styles/utils/_vars.scss'), 'utf-8');

export default defineConfig({
  plugins: [
    imagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // Inject the variables directly
        // additionalData: varsContent,
      },
    },
  },
  build: {
    outDir: 'Content', // Define a pasta de saída
  },
  publicDir: 'src/components', // Define a pasta de componentes como publicDir
});
