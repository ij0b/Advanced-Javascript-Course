Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
            imgProduct: 'img/3x3.jpg'
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products container">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :img="imgProduct"
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `<div class="product-item">
                <a class="product_image-container" href="">
                    <img class="product_image" :src="img" alt="Some img">
                </a>
                <h3 class="product_caption">
                    <a class="product_caption-link" href="">
                        {{product.product_name}}
                    </a>    
                </h3>
                <div class="product_price-btn-container">
                    <p class="product_price">{{product.price}}</p>                    
                    <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
                </div>    
            </div>`

})