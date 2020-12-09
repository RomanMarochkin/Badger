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
  components: {
    Card,
  },
  props: {
    pageName: String
  },
  data() {
    return {
      items: [],
    }
  },
  watch: {
    pageName(){
      service.setPath(window.location.pathname.split('/')[1])
      this.items = []
      const getData = async () =>{
        if(this.pageName === 'pizza'){
          this.items = await service.getPizza()
        }
        if(this.pageName === 'soup'){
          this.items = await service.getSoup()
        }
        if(this.pageName === 'salad'){
          this.items = await service.getSalad()
        }
        if(this.pageName === 'sushi'){
          this.items = await service.getSushi()
        }
        if(this.pageName === 'hotdishes'){
          this.items = await service.getHotDishes()
        }
        if(this.pageName === 'dessert'){
          this.items = await service.getDessert()
        }
        if(this.pageName === 'cocktails'){
          this.items = await service.getCocktails()
        }
      }
      getData()
    }
  },
  mounted(){
    service.setPath(window.location.pathname.split('/')[1])
    const getData = async () =>{
      if(this.pageName === 'pizza'){
        this.items = await service.getPizza()
      }
      if(this.pageName === 'soup'){
        this.items = await service.getSoup()
      }
      if(this.pageName === 'salad'){
        this.items = await service.getSalad()
      }
      if(this.pageName === 'sushi'){
        this.items = await service.getSushi()
      }
      if(this.pageName === 'hotdishes'){
        this.items = await service.getHotDishes()
      }
      if(this.pageName === 'dessert'){
        this.items = await service.getDessert()
      }
      if(this.pageName === 'cocktails'){
        this.items = await service.getCocktails()
      }
    }
    getData()
  },
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
