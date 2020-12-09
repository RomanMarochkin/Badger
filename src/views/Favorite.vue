<template>
  <div>
    <main>
      <div class="cards">
        <Card 
        v-for="item in items" 
        :key="item.id"
        :item="item"
        />
      </div>
    </main>
  </div>
</template>

<script>
import Card from '@/components/Card'
import Service from '@/service'

const service = new Service();


export default {
  name: 'Home',
  components: {
    Card,
  },
  props: {
    pageName: String
  },
  data() {
    return {
      items: []
    }
  },
  mounted(){
    service.setPath(window.location.pathname.split('/')[1])
    const getData = async () =>{
      const favoriteTest = await localStorage.getItem('favorite')
      if(!favoriteTest){
        await localStorage.setItem('favorite', JSON.stringify([]))
      }
      const favorite = await JSON.parse(localStorage.getItem('favorite'))
      this.items = favorite
    }
    getData()
  }
}
</script>

<style lang="scss" scoped>
main{
  padding-top: 80px;
  .cards{
    display: flex;
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 480px) {
  main{
    padding-top: 130px;
  }
}
</style>
