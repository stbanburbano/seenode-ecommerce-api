import express from 'express'

const app = express()

const port = process.env.PORT || 3000;

app.get('/Products', (req, res)=> {
    res.json([
        {
            id: '1',
            name: "laptop gaming",
            price: 1000,
            description: "laptop gaming lenovo",
            imageURL:"https://tse1.mm.bing.net/th/id/OIP.PFLP2eQXw36IA7s-fay7wwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
    ])
})
app.listen(port, () => {
    console.log('server on port', port)
})