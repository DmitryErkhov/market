<template>
    <div class="imgSet">
        <div class="bigImg">
            <img class="big" :src="require(`@/assets/img/${namePhoto}1.svg`)" alt="(-:-)">
            <img class="big" :src="require(`@/assets/img/${namePhoto}2.svg`)" alt="(-:-)">
        </div>
        <div class="rowSmall">
            <div class="first">
                <img class="small" :src="require(`@/assets/img/${namePhoto}1.svg`)" alt="(-:-)">
                <img class="small" :src="require(`@/assets/img/${namePhoto}2.svg`)" alt="(-:-)">
            </div>
            <div class="second">
                <img class="small" :src="require(`@/assets/img/${namePhoto}3.svg`)" alt="(-:-)">
                <img class="small" :src="require(`@/assets/img/${namePhoto}4.svg`)" alt="(-:-)">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props:{
            namePhoto:{
                type: String,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.imgSet{
    height: 672px;
    width: 888px;
    color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.bigImg{
    height: 560px;
    width: 888px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
}
.rowSmall{
    margin-top: 24px;
    margin-left: 12px;
}
.rowSmall, .first, .second{
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 16px;
}
.small{
    width: 62px;
    height: 88px;
}
.big{
    width: 436px;
    height: 560px;
}
.first{
    border: 2px solid #0D1421;
}
</style>