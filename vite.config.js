import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// GitHub Pages / preview friendly: relative base so the build works from any path.
export default defineConfig({
    plugins: [react()],
    base: './',
    server: { host: true, port: 5173 },
});
