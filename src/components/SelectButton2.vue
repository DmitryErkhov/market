<template>
    <div class="btn" @click="showList">
        <p>{{list[0]}}</p>
        <img src="@/assets/img/down.svg" alt="?">
        <ul v-if="statusShow">
            <li v-for="(item, index) in list" :key="index" @click="select(item)">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                step: 0,
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
        margin-left: 13px;
    }
}

ul{
    width: 250px;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    padding: 6px;
    background: #FFFFFF;
    gap: 8px;
}

</style>