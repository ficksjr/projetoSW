import cors from 'cors';
import express from 'express';
import axios from 'axios';

const app = express()

app.use(cors())

async function getContent() {
    const response = await fetch('http://localhost:4567/')
    const data = await response.json()
    show(data)

getContent()
}
app.get('/', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api")
    return res.json(data)
})


app.get('/films', async(req, res) => { 

    const { data } = await axios("http://swapi.dev/api/films")
    return res.json(data)
})


app.get('/films/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/films/${id}`)
    return res.json(data)
})


app.get('/people', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api/people")
    return res.json(data)
})


app.get('/people/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/people/${id}`)
    return res.json(data)
})


app.get('/films', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api/films")
    return res.json(data)
})


app.get('/films/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/films/${id}`)
    return res.json(data)
})


app.get('/species', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api/species")
    return res.json(data)
})


app.get('/species/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/species/${id}`)
    return res.json(data)
})


app.get('/vehicles', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api/vehicles")
    return res.json(data)
})


app.get('/vehicles/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/vehicles/${id}`)
    return res.json(data)
})


app.get('/starships', async(req, res) => { 
    const { data } = await axios("http://swapi.dev/api/starships")
    return res.json(data)
})


app.get('/starships/:id', async(req, res) => { 
    const { id } = req.params
    const { data } = await axios(`http://swapi.dev/api/starships/${id}`)
    console.log(id)
    return res.json(data)
})


const port = 4567;

app.listen(port)
