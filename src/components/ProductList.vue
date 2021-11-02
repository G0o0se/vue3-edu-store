<template>
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">

          <product
              v-for="product in products"
              :key="product.id"
              :id="product.id"
              :title="product.title"
              :category="product.category"
              :price="product.price"
              :is-available="product.is_available"
              :image="product.image"
          />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductList",
  components: {Product},
  data: () => ({
    products: [],
  }),

  methods: {
    async fetchProducts(){
      const response = await fetch("http://localhost:3000/products");
      this.products = await response.json();
    },
  },
  mounted() {
    this.fetchProducts();
  }
}
</script>
