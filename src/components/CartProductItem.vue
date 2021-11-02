<template>
  <tbody>
  <tr v-for="(prod, index) in $root.cartProducts" v-bind:key="prod.id">
    <td>
      <div class="d-flex">
        <img class="img-fluid rounded-1" v-bind:src="prod.image" width="70" alt="">
          <p class="mx-2 mb-0"> {{ prod.title }} </p>
      </div>
    </td>
    <td class="text-center">
      <div class="btn-group d-flex align-items-center" role="group">
        <button @click="$root.reduceProd(index)" type="button" class="btn shadow-none">-</button>
        <span class="mx-2">{{ prod.quantity }}</span>

        <button @click="$root.addProd(index)"
             type="button" class="btn shadow-none">+</button>
      </div>
    </td>
    <td class="text-center py-3">${{ prod.price }}</td>
    <td>
      <button
          @click="$root.deleteFromCart()"
          class="btn shadow-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
             viewBox="0 0 16 16">
          <path
              d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
        </svg>
      </button>
    </td>
  </tr>
  </tbody>
  <tfoot>
  <tr class="fw-bold px-4">
    <td class="text-end">
      Total:
    </td>
    <td class="text-center">{{ $root.totalProduct }}</td>
    <td class="text-end">$ {{ $root.totalPrice }}</td>
  </tr>
  </tfoot>
</template>

<script>

import Product from "./Product";

export default {
  name: "CartProductItem",
  components: {Product},
  data: () => ({
    products: [],
  }),
  props:{
    id: Number,
    title: {
      type: String,
      isRequired: true,
      default: "Product",
    },
    category: String,
    price: Number,
    isAvailable: Boolean,
    image: String,
    quantity: {
      type: Number,
      default: 1
    }
  },
  methods: {
    PlaceOrder(){
      console.log({
        title: this.title,
      });
    }
  }
}
</script>