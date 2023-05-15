<template>
    <div class="content">
        <img :src="require(`@/assets/img/${name_photo}`)" :alt="name_brand">
        <div class="desc">
            <h1>{{ price }}</h1>
            <div class="brand">
                <p>Бренд</p>
                <h2>{{ name_brand }}</h2>
            </div>
            <p class="marg-left">{{ name_model }}</p>
            <div class="logist">Доставка займёт от 5 до 10 дней</div>
        </div>
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
        flex-direction: row;
        width: 1100px;
        height: 320px;
        gap: 16px;
        border-right: 1px solid #EAECF0;
    }
    .logist{
        width: 780px;
        font-size: 18px;
        line-height: 28px;
        color: #0D1421;
        border-top: 1px solid #EAECF0;
        margin-top: 16px;
        padding-top: 16px;
    }
    .desc{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .brand{
        display: flex;
        justify-content: flex-start;
        gap: 4px;
    }

    img{
        width: 240px;
        height: 272px;
    }
    h1,h2{
        margin: 0;
    }
    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #0D1421;
    }
    p{
        display: flex;
        justify-content: flex-start;
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