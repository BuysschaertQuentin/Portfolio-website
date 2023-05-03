// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import babel from '@rollup/plugin-babel';

export default defineConfig({
  plugins: [
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
});
