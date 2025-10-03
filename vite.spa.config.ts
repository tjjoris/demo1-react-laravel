import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(),
    tailwindcss(),],
    build: {
        outDir: path.resolve(__dirname, 'public/build'), // <-- change here
        emptyOutDir: true,
    },
    root: 'resources/js', // Set your React app root
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
        },
    },
});