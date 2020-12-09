<template>
  <div id="app">
    <Header :name="pathName.value">
      <img @click="isMenu = !isMenu" class="item" src="@/assets/list.svg">
    </Header>
    <Menu :isMenu="isMenu"/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Service from '@/service'

const service = new Service();

export default {
  components: {
    Header,
    Menu,
  },
  data() {
    return {
      isMenu: false,
      pathName: service.getPath()
    }
  },
  mounted(){
    const favorite = localStorage.getItem('favorite')
    if(!favorite){
      localStorage.setItem('favorite', JSON.stringify([]))
    }
    const cart = localStorage.getItem('cart')
    if(!cart){
      localStorage.setItem('cart', JSON.stringify([]))
    }
  },
}
</script>

<style lang="scss">
html{
  overflow-x: hidden;
}
body{
  margin: 0;
  background-color: #303030;
}
input{
  outline: none;
}
button{
  outline: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
::-webkit-scrollbar {
  background-color: #262626;
}
::-webkit-scrollbar-thumb {
  background-color: #202020;
  border-radius: 5px;
}
</style>
