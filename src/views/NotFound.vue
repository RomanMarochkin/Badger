<template>
    <div class="modal">
        <img src="@/assets/badger.png">
        <h1>Page not found</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 10000;
        background-color: #262626;
        img{
            width: 300px;
        }
        h1{
            font-size: 50px;
        }
    }
</style>