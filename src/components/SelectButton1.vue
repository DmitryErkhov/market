<template>
    <div class="btn" @click="showList">
        <img src="@/assets/img/filter.svg" alt="?">
        <p>Фильтры</p>

        <ul v-if="statusShow">
            <li v-for="(item, index) in list" :key="index" @click="select(item)">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[
                    'По умолчанию', 'Сначала новые', 'Сначала старые'
                ],
                statusShow: false
            }
        },
        methods:{
            showList(){
                this.statusShow = !this.statusShow
            },
            select(el){
                this.$emit('select', el)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.btn{
    position: relative;
    padding: 8px 16px;
    background: #FFFFFF;
    border-radius: 8px;

    img{
        margin-right: 8px;
    }
}

ul{
    width: 320px;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 6px;
    background: #FFFFFF;
    gap: 8px;
}

</style>