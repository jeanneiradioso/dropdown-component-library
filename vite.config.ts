import react from '@vitejs/plugin-react'
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true, exclude: ["**/*.stories.ts", "**/*.test.tsx"]}),
  ],
  build: { 
    lib: { 
      entry: './src/index.ts', 
      name: 'dynamic-select-dropdown', 
      fileName: (format) => `dynamic-select-dropdown.${format}.js`,
      formats: ['es', 'cjs', 'umd'],
    }, 
    rollupOptions: { 
      external: Object.keys(peerDependencies), 
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } } 
    }
  },
})
