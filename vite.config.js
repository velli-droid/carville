import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        template: resolve(__dirname, './pages/template.html'),
        home: resolve(__dirname, './pages/home.html'),
        catalogMain: resolve(__dirname, './pages/catalog-main.html'),
        catalogProduct: resolve(__dirname, './pages/catalog-product.html'),
        productPage: resolve(__dirname, './pages/product-page.html'),
        favorites: resolve(__dirname, './pages/favorites.html'),
        docs: resolve(__dirname, './pages/docs.html'),
        searchByCar: resolve(__dirname, './pages/search-by-car.html'),
        searchPage: resolve(__dirname, './pages/search-page.html'),
      }
    }
  }
})