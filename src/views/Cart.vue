<template>
  <div>
    <main>
      <div class="cardsWrapper">
        <CartCard 
        v-for="item in cart"
        :key="item.id"
        :item="item"
        @plus-quantity="plusCart"
        @minus-quantity="minusCart"
        />
      </div>
      <div class="order">
        <h1>Total price: {{price}}$</h1>
        <div>
          <div class="inputs">
            <div>
              <h2>name</h2>
              <input type="text" v-model="order.name">
            </div>
            <div>
              <h2>phone</h2>
              <input type="number" v-model="order.phone">
            </div>
          </div>
          <h2>appliances</h2>
          <div class="counter">
            <div @click="minusAppliances" class="button">-</div>
            <div class="number">{{order.appliances}}</div>
            <div @click="plusAppliances" class="button">+</div>
          </div>
        </div>
        <button @click="makeOrder">make an order</button>
      </div>
    </main>
    <transition name="modal">
      <div v-if="order.number" class="modalWrapper">
        <div>
          <h2>Thank you</h2>
          <p>Order number: {{order.number}}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CartCard from '@/components/CartCard'
import Service from '@/service'

const service = new Service();

export default {
  components: {
    CartCard,
  },
  data() {
    return {
      isMenu: false,
      cart: [],
      order: {
        name: null,
        phone: null,
        appliances: 1,
        number: null
      }
    }
  },
  mounted(){
    service.setPath(window.location.pathname.split('/')[1])
    const getData = async () => {
      const cart = await localStorage.getItem('cart')
      if(!cart){
        await localStorage.setItem('cart', JSON.stringify([]))
      }
      this.cart = await JSON.parse(localStorage.getItem('cart'))
    }
    getData()
  },
  methods: {
    plusCart(id){
      const elem = this.cart.find(e => e.id === id)
      ++elem.quantity
    },
    minusCart(id){
      const elem = this.cart.find(e => e.id === id)
      --elem.quantity
      if(elem.quantity === 0){
        this.cart = this.cart.filter(e => e.id !== id)
      }
    },
    plusAppliances(){
      ++this.order.appliances
    },
    minusAppliances(){
      if(this.order.appliances === 0){
        return
      }
      --this.order.appliances
    },
    makeOrder(){
      let totalPrice = 0
      this.cart.forEach(e =>{
        totalPrice += e.price * e.quantity
      })
      const order = {...this.order, price: totalPrice, menu: []}
      this.cart.forEach(e =>{
        const elem = {
          name: e.name,
          quantity: e.quantity,
          id: e.id,
        }
        order.menu.push(elem)
      })
      const name = /^[a-zA-Zа-яА-Я]+$/
      const phone = /^[0-9]+$/
      if(name.test(order.name) && phone.test(order.phone)){
        const postOrder = async () =>{
          this.order.number = await service.postOrder(order)
          setTimeout(() =>{
            this.order.number = null
          }, 3000)
        }
        postOrder()
      }
    },
  },
  computed: {
    price(){
      let totalPrice = 0
      this.cart.forEach(e =>{
        totalPrice += e.price * e.quantity
      })
      return totalPrice
    }
  }
}
</script>

<style lang="scss" scoped>
main{
  padding: 20px;
  padding-top: 100px;
  display: flex;
  .cardsWrapper{
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  .order{
    position: fixed;
    height: calc(100vh - 80px);
    top: 80px;
    right: 0;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h1{
      margin: 0;
      margin-top: 30px;
    }
    h2{
      margin: 10px;
    }
    .counter{
      user-select: none;
      margin: 10px;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      .button{
        margin: 0 10px;
      }
    }
    input{
      font-size: 20px;
      width: 70%;
      padding: 10px;
      background-color: #00000000;
      color: white;
      border: 2px solid white;
      border-radius: 10px;
      transition: all .5s ease;
      margin-bottom: 10px;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      appearance: none;
    }
    button{
      font-size: 24px;
      width: 70%;
      padding: 10px;
      background-color: #00000000;
      color: white;
      border: 2px solid white;
      border-radius: 10px;
      transition: all .5s ease;
      margin-bottom: 30px;
    }
    button:hover{
      background-color: white;
      color: #282828;
      box-shadow: 0 0 10px white;
    }
  }
}
.modalWrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-enter, .modal-leave-to{
  opacity: 0;
  transition: all .5s ease;
}
.modal-enter-to{
  opacity: 1;
  transition: all .5s ease;
}
@media only screen and (max-width: 900px) {
  main{
    flex-direction: column;
    .cardsWrapper{
      width: 100%;
    }
    .order{
      height: auto;
      position: static;
      width: 100%;
      order: -1;
      h1{
        margin-bottom: 10px;
      }
      h2{
        margin-top: 30px;
      }
      .inputs{
        display: flex;
      }
      .counter{
        margin-bottom: 30px;
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  main{
    .cardsWrapper{
      align-items: center;
    }
    .order{
      h1{
        margin: 10px;
      }
      h2{
        margin-top: 10px;
      }
      .inputs{
        display: block;
      }
      .counter{
        margin-bottom: 20px;
      }
    }
  }
}
@media only screen and (max-width: 480px) {
  main{
    padding-top: 150px;
  }
}
</style>