import react from '@vitejs/plugin-react';


export default({
  root: '.',
  base: '/GameCreditsByJacob.github.io/',
  plugins: [react()]
  

  // server: {
  //   host: 'localhost',
  //   port: 5173,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:44308', // Replace with your backend URL
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   },
  // },
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: '/src/main.tsx',
  //   },
  
  // },
});
