import axios from 'axios'
const pathName = {
    value: 'asd'
}
export default class Service {
    setPath(path){
        pathName.value = path
    }
    getPath(){
        return pathName
    }
    async getPizza(){
        const {data} = await axios.get('/api/pizza')
        return data
    }
    async getSoup(){
        const {data} = await axios.get('/api/soup')
        return data
    }
    async getSalad(){
        const {data} = await axios.get('/api/salad')
        return data
    }
    async getSushi(){
        const {data} = await axios.get('/api/sushi')
        return data
    }
    async getHotDishes(){
        const {data} = await axios.get('/api/hotdishes')
        return data
    }
    async getDessert(){
        const {data} = await axios.get('/api/dessert')
        return data
    }
    async getCocktails(){
        const {data} = await axios.get('/api/cocktails')
        return data
    }
    async getAll(){
        const pizza = await axios.get('/api/pizza')
        const soup = await axios.get('/api/soup')
        const salad = await axios.get('/api/salad')
        const sushi = await axios.get('/api/sushi')
        const hotdishes = await axios.get('/api/hotdishes')
        const dessert = await axios.get('/api/dessert')
        const cocktails = await axios.get('/api/cocktails')
        const data = [
            ...pizza.data,
            ...soup.data,
            ...salad.data,
            ...sushi.data,
            ...hotdishes.data,
            ...dessert.data,
            ...cocktails.data,
        ]
        return data
    }
    async postOrder(order){
        const {data} = await axios.post('/api/order', order)
        return data
    }
}