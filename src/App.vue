<template>
  <div id="app">
    <TemplateHeader/>
    <main>
      <router-view/>
    </main>
    <TemplateFooter/>

  </div>
</template>

<script>
import TemplateHeader from './components/TemplateHeader.vue';
import TemplateFooter from './components/TemplateFooter.vue';
export default{
  components:{
    TemplateHeader,
    TemplateFooter,
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div, header, footer, li, ul, main, p, h1,h2,h3, main{
  display: flex;
}

main{
  flex-direction: column;
  align-self: center;
  display: flex;
  flex: 1;
}

#app {
  display: flex;
  font-family: 'Inter';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}


nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
