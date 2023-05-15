<template>
    <header>
        <router-link class="router-link" :to="{ path: '/'}">
            <div class="logo">
                <img src="@/assets/img/logo.svg" alt="*">
                <h3>Курсовой макет</h3>
            </div>
        </router-link>
            <div class="nav-icon">
                <img src="@/assets/img/account.svg" alt="(^-^)">
                <router-link class="router-link" :to="{ path: '/basket'}">
                    <img src="@/assets/img/basket.svg" alt="|_|">
                </router-link>
                
            </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
.router-link{
    color: #000;
  text-decoration: none;
}
header{
    display: flex;
    width: 100%;
    padding-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EAECF0;
    padding-left: 10%;
    padding-right: 10%;
    max-height: 72px;
    justify-content: space-between;
}

img{
    width: 20px;
    height: 20px;
}
h3{
    margin: 0;
}
.logo img:first-child{
    margin-right: 16px;
}
.nav-icon img:first-child{
    margin-right: 33px;
}

</style>