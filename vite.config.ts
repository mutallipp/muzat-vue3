import { resolve } from 'path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

const _resolve = (targetDiv: string) => {
  return resolve(__dirname, targetDiv)
}
export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': _resolve('./src'),
      '@assets': _resolve('./src/assets'),
      '@components': _resolve('./src/components'),
      '@defineds': _resolve('./src/defineds'),
      '@directive': _resolve('./src/directive'),
      '@icons': _resolve('./src/icons'),
      '@store': _resolve('./src/store'),
      '@styles': _resolve('./src/styles'),
      '@utils': _resolve('./src/utils'),
      '@pages': _resolve('./src/pages'),

    },
    // why remove it , look for https://github.com/vitejs/vite/issues/6026
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.mjs', '.vue'],
  },
  build: {
    // gzip报告不显示，减少构建时间
    reportCompressedSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    assetsDir: 'static/assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
  },
  css: {
    preprocessorOptions: {
      // define global scss variable
      scss: {
        // additionalData: '@import "./src/styles/variables.scss";',
      },
    },
  },
  optimizeDeps: {
    include: ['vue', 'lodash'],
  },

})
