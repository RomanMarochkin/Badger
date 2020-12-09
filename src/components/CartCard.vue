<template>
    <div class="card">
        <div class="wrappers">
            <div class="imageWrapper">
                <img :src="item.image">
            </div>
            <div class="wrapper">
                <h2 class="name">{{item.name}} {{item.price}}$</h2>
                <p>{{item.weight}} g</p>
            </div>
        </div>
        <div class="wrappers">
            <div class="counter">
                <div @click="minusCart()" class="button">-</div>
                <div class="number">{{item.quantity}}</div>
                <div @click="plusCart()" class="button">+</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: Object
        },
        methods: {
            plusCart(){
                const cart = JSON.parse(localStorage.getItem('cart'))
                const elem = cart.find(e => e.id === this.item.id)
                ++elem.quantity
                this.$emit('plus-quantity', this.item.id)
                localStorage.setItem('cart', JSON.stringify(cart))
            },
            minusCart(){
                let cart = JSON.parse(localStorage.getItem('cart'))
                const elem = cart.find(e => e.id === this.item.id)
                --elem.quantity
                this.$emit('minus-quantity', this.item.id)
                if(elem.quantity === 0){
                    cart = cart.filter(e => e.id !== this.item.id)
                }
                localStorage.setItem('cart', JSON.stringify(cart))
            }
        }
    }
</script>

<style lang="scss" scoped>
.card{
    margin: 20px;
    box-shadow: 0 0 10px #282828;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrappers{
        display: flex;
        .imageWrapper{
            overflow: hidden;
            display: flex;
            justify-content: center;
            width: 150px;
            height: 100px;
            img{
                height: 100%;
            }
        }
        .wrapper{
            text-align: start;
            margin: 0 10px;
            .name{
                margin: 10px 0;
            }
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
    }
}
@media only screen and (max-width: 600px) {
    .card{
        flex-direction: column;
        width: 300px;
        .wrappers{
            flex-direction: column;
            .imageWrapper{
                width: 300px;
                height: 200px;
            }
            .wrapper{
                p{
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>