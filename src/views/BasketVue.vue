<template>
    <div class="basket">
        <div v-if="cart.length == 0" class="no-basket">
            <h1>Корзина</h1>
            <p>Ваша корзина пуста</p>
            <div class="predlog">
                <h2>Но у нас есть персональные предложения для вас</h2>
                <div class="container-card">
                <router-link class="router-link" v-for="(item, index) in listCard" :key="index" :to="{ path: '/product', query: { id: index}}">
                    <CardItem :price="item.price" :name_brand="item.name_brand" :name_model="item.name_model" :name_photo="item.name_photo" />
                </router-link>
                </div>
            </div>
        </div>
        <div v-else>
          <div class="cart">
            <li v-for="(product, index) in cart" :key="index">
                <BasketCar :price="product.price" :nameBrand="product.nameBrand" :nameModel="product.nameModel" :namePhoto="product.namePhoto"/>
            </li>
          </div>
          <!--<BasketCar :price="listCard[1].price" :name_brand="listCard[1].name_brand" :name_model="listCard[1].name_model" :name_photo="listCard[1].name_photo"/>-->
          <div class="itog-price">
            <p>Итого</p>
            <h3>К оплате много руб</h3>
            <li v-for="(product, index) in cart" :key="index">
              <p class="border">{{ product.nameModel }}</p>
            </li>
            <p class="border">Доставка</p>
            <p class="pad-88">Чтобы продолжить оформление заказа, необходимо</p>
            <p class="button">войти или зарегистрировать аккаунт</p>
          </div>
        </div>
      
    </div>
  </template>
  
  <script>
  import CardItem from '@/components/CardItem.vue';
  import BasketCar from '@/components/BasketCar.vue';
  
  export default {
    name: 'HomeView',
    components: {
      CardItem,
      BasketCar
  
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.getters.cartTotal;
    },
  },
    data(){
      return{
        listCard:[
          {
            price: '30 000 руб',
            name_brand: 'Каменный остров',
            name_model: 'Жилет с нашивкой компасом ',
            name_photo: "stone-island-1.svg"
          },
          {
            price: '18 800 руб',
            name_brand: 'АМИ Париж',
            name_model: 'Полосатая рубашка с коротким рукавом',
            name_photo: 'paris-1.svg'
          },
          {
            price: '47 300 руб',
            name_brand: 'Вквадрате2',
            name_model: 'Укороченные брюки с вышитым логотипом',
            name_photo: 'square2-1.svg'
          },
          {
            price: '19 000 руб',
            name_brand: 'Акне Студия',
            name_model: 'Полосатый двубортный блейзер',
            name_photo: 'studio-1.svg'
          },
        ],
        basketHave: false
        
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>

  .cart{
    display: flex;
    flex-direction: column;
  }
  .itog-price{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 2%;
    width: 476px;
  }
  .border{
    border-top: 1px solid #EAECF0;
    margin-top: 16px;
    padding-top: 16px;
  }
  .pad-88{
    margin-top: 88px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #667085;
  }
  .button{
    color: #354153;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .predlog{
    display: flex;
    flex-direction: column;
    border-top: 1px solid #EAECF0;
    margin-top: 40px;
    padding-top: 40px;
  }
  h1{
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #354153;
    margin-top: 12px;
  }
  p{
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #667085;
  }
  h2{
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #0D1421;
  }
  .router-link{
    text-decoration: none;
  }
  .basket{
    display: flex;
    margin-top: 5%;
  }
  .no-basket{
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 3%;
  }
  .container-card{
    display: flex;
    height: 100%;
  }
  
  .sort{
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    margin-bottom: 16px;
    margin-left: 2%;
    margin-right: 2%;
  }
  </style>
  