const express = require('express')
const path = require('path')
const {v4} = require('uuid')
const server = express()
server.use(express.json())

const orders = []
let pizza = [
    {
        name: 'Margarita',
        price: 9,
        weight: 500,
        ingredients: [
            'tomato sauce',
            'mozzarella cheese',
            'tomato',
            'basil green',
            'olive oil',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000595__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Carbonara',
        price: 8,
        weight: 550,
        ingredients: [
            'ham',
            'hard cheese',
            'tomato paste',
            'cream',
            'eggs',
            'dry spices',
        ],
        image: 'https://cdn.pixabay.com/photo/2014/07/08/12/34/pizza-386717__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Pepperoni',
        price: 10,
        weight: 450,
        ingredients: [
            'mozzarella cheese',
            'olive oil',
            'smoked sausage',
            'chilli',
            'tomatoes in their own juice',
            'oregano',
            'dried basil',
            'garlic',
            'ground black pepper'
        ],
        image: 'https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Four cheeses',
        price: 11,
        weight: 600,
        ingredients: [
            'mozzarella cheese',
            'emmental',
            'gorgonzola cheese',
            'parmesan cheese',
            'olive oil',
            'dried oregano',
        ],
        image: 'https://cdn.pixabay.com/photo/2018/12/12/13/04/pizza-3870780__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Crudo',
        price: 7,
        weight: 500,
        ingredients: [
            'tomato sauce',
            'mozzarella cheese',
            'mascarpone cheese',
            'parma ham',
            'extra virgin olive oil',
        ],
        image: 'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let soup = [
    {
        name: 'Tomato soup',
        price: 5,
        weight: 200,
        ingredients: [
            'Ginger root',
            'Garlic',
            'Kinza',
            'Coriander seeds',
            'Olive oil',
            'Worcestershire sauce',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/06/01/21/40/soup-1429793__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Pumpkin soup',
        price: 6,
        weight: 150,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/01/24/20/30/soup-2006317__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Chicken broth',
        price: 7,
        weight: 220,
        ingredients: [
            'Carrot',
            'Sweet',
            'Garlic',
            'Kinza',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2018/10/25/19/15/goulash-3773134__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Mushroom cream soup',
        price: 8,
        weight: 250,
        ingredients: [
            'Sweet',
            'Ginger root',
            'Garlic',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2015/09/02/12/26/soup-918422__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let salad = [
    {
        name: 'Caesar',
        price: 9,
        weight: 100,
        ingredients: [
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/03/17/23/30/salad-1264107__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Crab',
        price: 10,
        weight: 120,
        ingredients: [
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
            'Carrot',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/01/09/20/23/pasta-salad-1967501__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let sushi = [
    {
        name: 'Grip',
        price: 10,
        weight: 200,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/10/15/11/41/sushi-2853382__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Sashimi',
        price: 9,
        weight: 250,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2014/10/16/17/23/sushi-491425__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Rolled sushi',
        price: 8,
        weight: 140,
        ingredients: [
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2014/06/21/02/28/sushi-373587__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Manual winding',
        price: 7,
        weight: 130,
        ingredients: [
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/08/07/21/53/sushi-2608281__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Tuna',
        price: 11,
        weight: 250,
        ingredients: [
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/04/04/03/20/food-2200139__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Horse mackerel',
        price: 7,
        weight: 120,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/05/21/14/09/food-1406883__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Anago',
        price: 8,
        weight: 230,
        ingredients: [
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/06/04/03/42/sushi-2370273__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Aoyagi',
        price: 10,
        weight: 320,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/01/22/17/13/sushi-2000239__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let hotdishes = [
    {
        name: 'Kebab',
        price: 10,
        weight: 340,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/04/14/20/16/meat-1329684__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Crayfish',
        price: 20,
        weight: 700,
        ingredients: [
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2020/03/30/12/08/food-4984058__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Porridge',
        price: 7,
        weight: 400,
        ingredients: [
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/09/25/19/11/chicken-liver-2786322__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let dessert = [
    {
        name: 'Almond cookie',
        price: 8,
        weight: 100,
        ingredients: [
            'Pumpkin',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
        ],
        image: 'https://cdn.pixabay.com/photo/2015/03/26/09/39/cupcakes-690040__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Apple pie',
        price: 7,
        weight: 120,
        ingredients: [
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/10/31/18/14/ice-1786311__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Bagel',
        price: 9,
        weight: 200,
        ingredients: [
            'Sweet',
            'Ginger root',
            'Garlic',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/03/31/18/02/strawberry-dessert-2191973__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Baked alaska',
        price: 10,
        weight: 140,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/03/09/15/30/dessert-1246687__340.jpg',
        popularity: 0,
        id: v4(),
    },
]
let cocktails = [
    {
        name: 'Lemonade',
        price: 7,
        weight: 70,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/11/19/13/53/bar-1839361__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Fruit juice',
        price: 9,
        weight: 80,
        ingredients: [
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
            'Butter',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Herbal tea',
        price: 8,
        weight: 130,
        ingredients: [
            'Pumpkin',
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Coriander seeds',
        ],
        image: 'https://cdn.pixabay.com/photo/2015/09/02/13/26/cocktail-919074__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Ginger ale',
        price: 10,
        weight: 90,
        ingredients: [
            'Garlic',
            'Carrot',
            'Kinza',
            'Red onion',
            'Olive oil',
            'Worcestershire sauce',
            'Ground black pepper',
        ],
        image: 'https://cdn.pixabay.com/photo/2018/05/17/15/33/cocktail-3408834__340.jpg',
        popularity: 0,
        id: v4(),
    },
    {
        name: 'Milkshake',
        price: 11,
        weight: 100,
        ingredients: [
            'Sweet',
            'Ginger root',
            'Garlic',
            'Carrot',
        ],
        image: 'https://cdn.pixabay.com/photo/2017/05/03/20/08/cocktail-2282032__340.jpg',
        popularity: 0,
        id: v4(),
    },
]

server.get('/api/pizza', (req, res) =>{
    res.status(200).json(pizza)
})
server.get('/api/soup', (req, res) =>{
    res.status(200).json(soup)
})
server.get('/api/salad', (req, res) =>{
    res.status(200).json(salad)
})
server.get('/api/sushi', (req, res) =>{
    res.status(200).json(sushi)
})
server.get('/api/hotdishes', (req, res) =>{
    res.status(200).json(hotdishes)
})
server.get('/api/dessert', (req, res) =>{
    res.status(200).json(dessert)
})
server.get('/api/cocktails', (req, res) =>{
    res.status(200).json(cocktails)
})
server.post('/api/order', (req, res) =>{
    if(
        req.body.name && req.body.name.length > 0 && typeof req.body.name === 'string' &&
        req.body.menu && req.body.menu.length > 0 && typeof req.body.menu === 'object' &&
        req.body.phone && req.body.phone.length > 0 && typeof +req.body.phone === 'number' && !isNaN(+req.body.phone) &&
        req.body.price && typeof +req.body.price === 'number' && !isNaN(+req.body.price) &&
        req.body.appliances && typeof +req.body.appliances === 'number' && !isNaN(+req.body.appliances)
    ){
        let number = []
        for(let i = 0; i < 10; i++){
            number.push(Math.floor(Math.random() * 10))
        }
        number = number.join('')
        orders.push({...req.body, number: number})
        const all = [
            ...pizza,
            ...soup,
            ...salad,
            ...sushi,
            ...hotdishes,
            ...dessert,
            ...cocktails,
        ]
        req.body.menu.forEach(elem => {
            let item = all.find(e => e.id === elem.id)
            item.popularity += elem.quantity
        });
        res.status(200).json(number)
    }else{
        res.status(400).json('bad request')
    }
})

server.use(express.static(path.resolve(__dirname, 'dist')))
server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
server.listen(8081, () =>{
    console.log('server started ')
})