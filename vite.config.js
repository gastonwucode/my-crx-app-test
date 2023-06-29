import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import vue from '@vitejs/plugin-vue'
import zipPack from 'vite-plugin-zip-pack';
import manifest from './src/manifest.js'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === 'production'

  return {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src/content', import.meta.url))
      }
    },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      sourcemap: false,
      minify: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    plugins: [crx({ manifest }), vue(),zipPack({
        outDir: `package`,
        inDir: 'build',
        // @ts-ignore
        outFileName: `${manifest.short_name ?? manifest.name.replaceAll(" ", "-")}-extension-v${manifest.version}.zip`,
      })],
  }
})
