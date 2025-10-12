import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
     federation ({
      name: 'base_app',
      filename: 'remoteEntry.js',
      remotes:{
        page_app:{
          entry:'http://localhost:5174/remoteEntry.js',
          type:'module'
        }
      },
      shared:{
        react:{
          singleton:true,
          requiredVersion:'^18.0.0'
        },
        'react-dom':{
          singleton:true,
          requiredVersion:'^18.0.0'
        },
        'react-router-dom':{
          singleton:true
        }
      }
    })
  ],
  server:{ 
    port: 5175
  }, 
  build:{
    target: 'esnext'
  }
})
