import ViteCommonJS from '@originjs/vite-plugin-commonjs';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {  loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
    },
    plugins: [react()],
    resolve: {
      alias: {
        Buffer: 'buffer'
      },
    },
  }
}
)
