import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 server:{
  proxy:{
    "/api":"https://5c6fa1d2-08d3-4e08-aa59-4c40df28f3d5-00-2kcih3ksh43ly.spock.replit.dev"
  },
 },
  plugins: [react()],
})
