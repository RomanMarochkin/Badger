<template>
    <div class="card">
        <div class="imageWrapper">
            <img :src="item.image">
        </div>
        <div class="description">
            <div class="wrapper">
                <h2>{{item.name}}</h2>
                <svg @click="favorite" :fill="isFavorite? '#ff0000' : '#ffffff'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve"><path d="M343.611,22.543c-22.614,0-44.227,5.184-64.238,15.409c-13.622,6.959-26.135,16.205-36.873,27.175c-10.738-10.97-23.251-20.216-36.873-27.175c-20.012-10.225-41.625-15.409-64.239-15.409C63.427,22.543,0,85.97,0,163.932c0,55.219,29.163,113.866,86.678,174.314c48.022,50.471,106.816,92.543,147.681,118.95l8.141,5.261l8.141-5.261c40.865-26.406,99.659-68.479,147.681-118.95C455.837,277.798,485,219.151,485,163.932C485,85.97,421.573,22.543,343.611,22.543z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
            </div>
            <p>{{item.weight}} g</p>
            <p class="ingredients">{{item.ingredients.join(', ')}}</p>
            <div class="buttonWrapper">
                <h2>{{item.price}}$</h2>
                <button v-if="quantity < 1" @click="addToCart" class="addButton">Add to сart</button>
                <div v-if="quantity >= 1" class="counter">
                    <div @click="minusCart" class="button">-</div>
                    <div class="number">{{quantity}}</div>
                    <div @click="plusCart" class="button">+</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isFavorite: false,
                quantity: 0,
            }
        },
        props: {
            item: Object
        },
        methods: {
            favorite(){
                let favorite = JSON.parse(localStorage.getItem('favorite'))
                const isFavorite = favorite.find(e => e.id === this.item.id)
                if(isFavorite){
                    favorite = favorite.filter(e => e.id !== this.item.id)
                    localStorage.setItem('favorite', JSON.stringify(favorite))
                    this.isFavorite = false
                }else{
                    favorite.push(this.item)
                    localStorage.setItem('favorite', JSON.stringify(favorite))
                    this.isFavorite = true
                }
            },
            addToCart(){
                const cart = JSON.parse(localStorage.getItem('cart'))
                const data = {
                    quantity: 1,
                    ...this.item,
                }
                this.quantity = 1
                cart.push(data)
                localStorage.setItem('cart', JSON.stringify(cart))
            },
            plusCart(){
                const cart = JSON.parse(localStorage.getItem('cart'))
                const elem = cart.find(e => e.id === this.item.id)
                ++elem.quantity
                ++this.quantity
                localStorage.setItem('cart', JSON.stringify(cart))
            },
            minusCart(){
                let cart = JSON.parse(localStorage.getItem('cart'))
                const elem = cart.find(e => e.id === this.item.id)
                --elem.quantity
                --this.quantity
                if(elem.quantity === 0){
                    cart = cart.filter(e => e.id !== this.item.id)
                }
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        },
        mounted(){
            const getData = async () => {
                const favorite = await JSON.parse(localStorage.getItem('favorite'))
                if(favorite.find(e => e.id === this.item.id)){
                    this.isFavorite = true
                }
                const cart = await JSON.parse(localStorage.getItem('cart'))
                const elem = cart.find(e => e.id === this.item.id)
                if(elem){
                    this.quantity = elem.quantity
                }
            }
            getData()
        }
    }
</script>

<style lang="scss" scoped>
.card{
    margin: 3%;
    width: 27.33%;
    background-color: #282828;
    box-shadow: 0 0 10px #282828;
    transition: transform .5s ease;
    display: grid;
    grid-auto-rows: 0fr 1fr;
    .imageWrapper{
        overflow: hidden;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 18.5vw;
        img{
            height: 100%;
        }
    }
    .description{
        width: 90%;
        margin: 0 5%;
        margin-bottom: 5%;
        height: 100%;
        text-align: start;
        position: relative;
        .wrapper{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            h2{
                margin: 0;
            }
            svg{
                height: 40px;
            }
        }
        .ingredients{
            margin-bottom: 120px;
        }
        .buttonWrapper{
            position: absolute;
            bottom: 1.5vw;
            width: 100%;
            .addButton{
                font-size: 24px;
                width: 100%;
                padding: 10px;
                background-color: #00000000;
                color: white;
                border: 2px solid white;
                border-radius: 10px;
                transition: all .5s ease;
            }
            .addButton:hover{
                background-color: white;
                color: #282828;
                box-shadow: 0 0 10px white;
            }
            .counter{
                user-select: none;
                margin: 10px;
                margin-top: 33px;
                font-size: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                .button{
                    margin: 0 10px;
                }
            }
        }
    }
}
.card:hover{
    transform: scale(1.02);
}
@media only screen and (max-width: 900px) {
    .card{
        margin: 2.5%;
        width: 45%;
        .imageWrapper{
            height: 31vw;
        }
    }
}
@media only screen and (max-width: 500px) {
    .card{
        margin: 5%;
        width: 90%;
        .imageWrapper{
            height: 60vw;
        }
        .description{
            .buttonWrapper{
                bottom: 3vw;
            }
        }
    }
}
</style>