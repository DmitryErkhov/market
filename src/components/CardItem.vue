<template>
    <div class="content">
        <img :src="require(`@/assets/img/${name_photo}`)" :alt="name_brand">
        <h1>{{ price }}</h1>
        <div class="brand marg-left">
            <p>Бренд</p>
            <h2>{{ name_brand }}</h2>
        </div>
        <p class="marg-left">{{ name_model }}</p>
    </div>
</template>

<script>
    export default {
        props:{
            price:{
                type: String,
            },
            name_brand:{
                type: String,
            },
            name_model:{
                type: String,
            },
            name_photo:{
                type: String,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .content{
        padding: 24px;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 576px;
        gap: 16px;
    }
    .brand{
        display: flex;
        gap: 4px;
    }
    .marg-left{
        padding-left: 24px;
    }
    img{
        width: 352px;
        height: 420px;
    }
    h1,h2{
        justify-content: center ;
        margin: 0;
    }
    h1{
        justify-self: center;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #0D1421;
    }
    p{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        margin: 0;
        color: #667085;
    }
    h2{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #354153;
    }
</style>