import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import {federation} from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
    federation({
      name: 'page_app',
      filename: 'remoteEntry.js',
      remotes:{
        comp_app:{
          entry:'http://localhost:5173/remoteEntry.js'
          ,type:'module'
        }},
      shared:{
        react:{singleton:true},
        'react-dom':{singleton:true}}
    })
  ],
  server:{
    port:5174
  },
  build:{
    target:'esnext'
  }
})
