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
      exposes:{
        //'./components':'./src/page_components/index.js',
        './pages':'./src/Imp_Pages/index.js'
      },
      remotes:{
        comp_app:{
          entry:'http://localhost:5173/remoteEntry.js'
          ,type:'module'
        }},
      shared:{
        react:{
          singleton:true,
          requiredVersion:'^18.0.0'
        },
        'react-dom':{
          singleton:true,
          requiredVersion:'^18.0.0'
        }}
    })
  ],
  server:{
    port:5174
  },
  build:{
    target:'esnext'
  }
})
