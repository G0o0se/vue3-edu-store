import {createApp} from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";

import ProductList from "./components/ProductList";
import CartButton from "./components/CartButton";
import CartModal from "./components/CartModal";

const app = createApp({
    data: () => ({
        cartProducts: [],
    }),

    methods: {
        addToCart (products)
        {
            let idsProducts = [];

            this.cartProducts.forEach((value, key) =>
            {
                if ( value.id === products.id )
                {
                    value.quantity++;
                }

                idsProducts.push(value.id);
            });

            if ( !idsProducts.includes(products.id) ) this.cartProducts.push(products);

        },
        deleteFromCart(products) {
            this.cartProducts.splice(products, 1);
        },

        addProd(products){
            this.cartProducts[products].quantity++;
        },

        reduceProd(products){
                if(this.cartProducts[products].quantity === 1) {
                    this.cartProducts.splice(products, 1);
                } else if (this.cartProducts[products].quantity < 1) {
                } else {
                    this.cartProducts[products].quantity--;
                }
        }
    },
    computed: {
        totalPrice: function () {
            let totalPrice = 0;
            for(let i = 0; i < this.cartProducts.length; i++) {
                totalPrice += this.cartProducts[i].price * this.cartProducts[i].quantity;
            }
            return totalPrice.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        },
        totalProduct: function () {
            let totalProduct = 0;
            for(let i = 0; i < this.cartProducts.length; i++) {
                totalProduct += this.cartProducts[i].quantity;
            }
            return totalProduct.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    }
});

app.component("product-list", ProductList);
app.component("cart-button", CartButton);
app.component("cart-modal", CartModal);
app.mount("#app");
