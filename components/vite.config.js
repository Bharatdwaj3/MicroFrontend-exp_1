import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {federation} from '@module-federation/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    
    federation({
      name: 'comp_app',
      filename:'remoteEntry.js',
      exposes:{
        './components':'./src/page_components/index.js'
      },
      shared:{
        react:{singleton:true},
        'react-dom':{singleton:true}
      },
      remoteType:'module'
    }),react(),
    tailwindcss()
  ],
  server:{
    port:5173
  },
  build:{
    target:'esnext',
    minify:false,
    cssCodeSplit:false
  }
})
