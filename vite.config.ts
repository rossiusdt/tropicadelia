import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-public-safe',
      apply: 'build',
      closeBundle() {
        const distPublic = resolve(__dirname, 'dist');
        const publicDir = resolve(__dirname, 'public');
        const files = fs.readdirSync(publicDir);
        for (const file of files) {
          if (file.includes(' ')) continue;
          try {
            fs.copyFileSync(resolve(publicDir, file), resolve(distPublic, file));
          } catch (_) {}
        }
      },
    },
  ],
  publicDir: false,
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
