<template>
    <div>
        <header>
            <div class="wrapper">
                <h1 class="logo">{{name}}</h1>
                <div class="nav">
                    <router-link to="/">
                        <img class="item" src="@/assets/home.svg">
                    </router-link>
                    <router-link to="/favorite">
                        <img class="item" src="@/assets/favourite.svg">
                    </router-link>
                    <router-link to="/cart">
                        <img class="item" src="@/assets/shopping.svg">
                    </router-link>
                    <slot></slot>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
    export default {
        props: {
            name: String
        }
    }
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
header{
    background-color: #262626;
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 1000;
    .wrapper{
        margin: 0 10px;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo{
            font-family: 'Luckiest Guy', cursive;
            font-weight: 100;
            margin: 0;
            margin-left: 10px;
        }
        .nav{
            .item{
                margin: 0 10px;
                height: 50px;
            }
        }
    }
}
@media only screen and (max-width: 480px) {
    header{
        .wrapper{
            height: 130px;
            flex-direction: column;
            justify-content: center;
            .logo{
                font-size: 40px;
                margin: 0;
                margin-bottom: 10px;
            }
            .nav{
                .item{
                    margin: 0 3vw;
                    height: 11vw;
                }
            }
        }
    }
}
</style>