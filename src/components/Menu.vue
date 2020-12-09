<template>
    <transition name="menu">
      <div class="menu" v-if="isMenu">
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
    </transition>
</template>

<script>
export default {
  props: {
    isMenu: Boolean
  }
}
</script>

<style lang="scss" scoped>
.menu{
  position: fixed;
  top: 80px;
  right: 0;
  height: calc(100vh - 80px);
  overflow: scroll;
  overflow-x: hidden;
  background-color: #262626;
  direction: rtl;
  z-index: 200;
  .imageWrapper{
    transition: transform .5s ease;
    margin: 20px;
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img{
      width: 100%;
    }
  }
}
::-webkit-scrollbar {
  width: .6vw;
}
::-webkit-scrollbar-thumb {
  border-radius: 0;
}
.menu-enter{
  transform: translateX(110px);
  opacity: 0;
  transition: all 1s ease;
}
.menu-enter-to{
  transform: translateX(0px);
  opacity: 1;
  transition: all 1s ease;
}
.menu-leave{
  transition: all 1s ease;
}
.menu-leave-to{
  transform: translateX(110px);
  opacity: 0;
  transition: all 1s ease;
}
@media only screen and (max-width: 480px) {
  .menu{
    top: 130px;
  }
}
</style>