const express = require('express')
const sqlite = require('sqlite3').verbose()
const cors = require('cors')
const app = express()
const productDB = new sqlite.Database('../../data/products.db')
const port = 3001
app.use(cors())
app.use(express.json())

app.get('/products', (req, res) => {
	productDB.all('SELECT * FROM phones', [], (err, data) => {
		res.send(data)
	})
})

app.get('/product/:id', (req, res) => {
	const id = req.params.id
	productDB.get('SELECT * FROM phones WHERE id = ?', [id], (err, data) => {
		res.send(data)
	})
})

app.post('/new', (req, res) => {
	const img = req.body.img
	const title = req.body.title
	const description = req.body.description

	productDB.run('INSERT INTO phones (img, title, description) VALUES (?, ?, ?)', [img, title, description], (err, data) => {
		res.send('ok')
	})
})

app.delete('/delete/:id', (req, res) => {
	productDB.run('DELETE FROM phones WHERE id = ?',[req.params.id], (err,data) => {
		res.send('del')
	})
})

app.put('/put/:id', (req,res) => {
	const img = req.body.img
	const title = req.body.title
	const description = req.body.description
    const id = req.params.id
	
	productDB.run('UPDATE phones set img = ?, title = ?, description =? WHERE id = ?', [img, title, description,id], (err, data) => {
		res.send('Put')
	})
})

app.listen(port)
