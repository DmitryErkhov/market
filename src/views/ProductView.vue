<template>
    <div class="product">
        <ImgSet :namePhoto="listCard[id].namePhoto"/>
        <div class="description">
            <h1>{{listCard[id].nameBrand}}</h1>
            <p>{{ listCard[id].nameModel}}</p>
            <p class="margin">{{ listCard[id].description }}</p>
            <h2 class="margin">{{ listCard[id].price }}</h2>
            <SelectButton3 class="margin"/>
            <button v-on:click="addToBasket">Добавить в корзину</button>
        </div>
        
    </div>
</template>

<script>

import ImgSet from '@/components/ImgSet.vue';
import SelectButton3 from '@/components/SelectButton3.vue';
    export default {
        methods:{
            addToBasket(){
                const product = this.listCard[this.id];
                this.$store.dispatch('addToCart', product);
            }
        },
        components:{
            ImgSet,
            SelectButton3,
        },
        name: 'ProductView',
        data() {
            return {
                
        id: 0,
        listCard:[
        {
          price: '30 000 руб',
          nameBrand: 'Каменный остров',
          nameModel: 'Жилет с нашивкой компасом ',
          namePhoto: "stone-island-",
          description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет."
        },
        {
          price: '18 800 руб',
          nameBrand: 'АМИ Париж',
          nameModel: 'Полосатая рубашка с коротким рукавом',
          namePhoto: 'paris-',
          description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет."
        },
        {
          price: '47 300 руб',
          nameBrand: 'Вквадрате2',
          nameModel: 'Укороченные брюки с вышитым логотипом',
          namePhoto: 'square2-',
          description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет."
        },
        {
          price: '19 000 руб',
          nameBrand: 'Акне Студия',
          nameModel: 'Полосатый двубортный блейзер',
          namePhoto: 'studio-',
          description: "Инновации и функциональность находятся в приоритете у Каменного острова, о чем свидетельствует этот жилет."
        },
      ],
        }
        },
        mounted() {
            this.id = this.$route.query.id;
        }
        
    }
</script>

<style lang="scss" scoped>

button{
    margin-top: 16px;
}
.product{
    margin: 32px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.description{
    margin-left: 64px;
    width: 35%;
    display: flex;
    justify-content: first baseline;
    flex-direction: column;
}
.margin{
    margin-top: 40px;
}
h1{
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #354153;
}
h2{
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
    color: #0D1421;
}
p{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #667085;
    text-align: left;
}
button{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    width: 204px;
    height: 48px;
    background: #0D1421;
    border-radius: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
}

</style>