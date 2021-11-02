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
        addToCart(products) {
            if (this.cartProducts.length !== 0){

                for(let item of this.cartProducts){
                    if (item.id === products.id){
                        item.quantity++;
                    } else {
                        this.cartProducts.push(products);

                    }
                    break;
                }

            /*this.cartProducts.forEach((item, value) => {
                if (item.id === products.id){
                   item.quantity++;
                } else {
                    this.cartProducts.push(products);
                    return;
                }
            });*/
            } else {
                this.cartProducts.push(products)
            }
        },
        deleteFromCart(products) {
            this.cartProducts.splice(products, 1);
        },
    },
});

app.component("product-list", ProductList);
app.component("cart-button", CartButton);
app.component("cart-modal", CartModal);
app.mount("#app");
