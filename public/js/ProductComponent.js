Vue.component('products', {
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `<div class="products container">
            <product 
            v-for="product of filtered" 
            :key="product.id_product"
            :product="product"
            :img="product.imgProduct"></product>
        </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
            <a class="product_image-container" href="">
                <img class="product_image" :src="img" :alt="product.product_name">
            </a>
            <h3 class="product_caption">
                <a class="product_caption-link" href="">
                    {{product.product_name}}
                </a>    
            </h3>
            <div class="product_price-btn-container">
                <p class="product_price">{{product.price}} руб.</p>                    
                <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
            </div>    
        </div>`
})