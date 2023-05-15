<template>
  <div class="home">
    <div class="sort">
      <SelectButton1/>
      <SelectButton2/>
    </div>
    <div class="container-card">
      
      <router-link class="router-link" v-for="(item, index) in listCard" :key="index" :to="{ path: '/product', query: { id: index}}">
        <CardItem :price="item.price" :name_brand="item.name_brand" :name_model="item.name_model" :name_photo="item.name_photo" />
      </router-link>
    </div>
    
  </div>
</template>

<script>
import CardItem from '@/components/CardItem.vue';
import SelectButton1 from '@/components/SelectButton1.vue';
import SelectButton2 from '@/components/SelectButton2.vue';

export default {
  name: 'HomeView',
  components: {
    CardItem,
    SelectButton1,
    SelectButton2,

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
      
    }
  }
}
</script>

<style lang="scss" scoped>

.router-link{
  text-decoration: none;
}
.home{
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
