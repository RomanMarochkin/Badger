<template>
  <div class="home">
    <main>
      <h2>Recommended</h2>
      <div v-if="isLoading" class="container">
        <div class="dash uno"></div>
        <div class="dash dos"></div>
        <div class="dash tres"></div>
        <div class="dash cuatro"></div>
      </div>
      <div v-if="!isLoading" class="recommended">
        <Card 
        v-for="item in items" 
        :key="item.id"
        :item="item"
        />
      </div>
      <h2>Menu</h2>
      <div class="menuWrapper">
        <div class="imageWrapper">
          <router-link to="/pizza">
            <img src="@/assets/pizza.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/soup">
            <img src="@/assets/soup.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/salad">
            <img src="@/assets/salad.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/sushi">
            <img src="@/assets/sashimi.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/hotdishes">
            <img src="@/assets/turkey.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/dessert">
            <img src="@/assets/dessert.svg">
          </router-link>
        </div>
        <div class="imageWrapper">
          <router-link to="/cocktails">
            <img src="@/assets/cocktail.svg">
          </router-link>
        </div>
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
  data() {
    return {
      items: [],
      isLoading: true
    }
  },
  mounted(){
    service.setPath('badger')
    const getData = async () =>{
      const all = await service.getAll()
      all.sort((a, b) => {
        if (a.popularity < b.popularity) {
          return 1;
        }
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 0;
      });
      all.length = 3
      this.items = all
      this.isLoading = false
    }
    getData()
  },
}
</script>

<style lang="scss" scoped>
main{
  padding-top: 100px;
  h2{
    font-size: 30px;
  }
  .container {
    display: flex;
    margin: 40px 0;
    justify-content: center;
    .dash {
      margin: 0 15px;
      width: 35px;
      height: 15px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 0 10px 0 white;
    }
    .uno {
      margin-right: -18px;
      transform-origin: center left;
      animation: spin 3s linear infinite;  
    }
    .dos {
      transform-origin: center right;
      animation: spin2 3s linear infinite;
      animation-delay: .2s;
    }
    .tres {
      transform-origin: center right;
      animation: spin3 3s linear infinite;
      animation-delay: .3s;
    }
    .cuatro {
      transform-origin: center right;
      animation: spin4 3s linear infinite;
      animation-delay: .4s;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(360deg);
      }
      30% {
        transform: rotate(370deg);
      }
      35% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes spin2 {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(0deg);
      }
      30% {
        transform: rotate(-180deg);
      }
      35% {
        transform: rotate(-190deg);
      }
      40% {
        transform: rotate(-180deg);
      }
      78% {
        transform: rotate(-180deg);
      }
      95% {
        transform: rotate(-360deg);
      }
      98% {
        transform: rotate(-370deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
    @keyframes spin3 {
      0% {
        transform: rotate(0deg);
      }
      27% {
        transform: rotate(0deg);  
      }
      40% {
        transform: rotate(180deg);
      }
      45% {
        transform: rotate(190deg);
      }
      50% {
        transform: rotate(180deg);
      }
      62% {
        transform: rotate(180deg);
      }
      75% {
        transform: rotate(360deg);
      }
      80% {
        transform: rotate(370deg);
      }
      85% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes spin4 {
      0% {
        transform: rotate(0deg);
      }
      38% {
        transform: rotate(0deg);
      }
      60% {
        transform: rotate(-360deg);
      }
      65% {
        transform: rotate(-370deg);
      }
      75% {
        transform: rotate(-360deg);
      }
      100% {
        transform: rotate(-360deg);
      }
    }
  }
  .recommended{
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .menuWrapper{
    margin: 20px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .imageWrapper{
      transition: transform .5s ease;
      margin: 20px 60px;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img{
        width: 100%;
      }
    }
    .imageWrapper:hover{
      transform: scale(1.1);
    }
  }
}
@media only screen and (max-width: 480px) {
  main{
    padding-top: 150px;
  }
}
</style>
