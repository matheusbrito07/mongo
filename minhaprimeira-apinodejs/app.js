const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function conn(funcao) {
    MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    }, funcao);
}

//test insomnia
app.get('/mongoprodutos', (req, res, next)=>{ 
  conn(
    (error, result)=> {
      const db = result.db("lojarecode");
      db.collection("produtos").find().toArray((error, result)=> {
        res.json(result)
    })
  })
})


//cadastrar produtos
//test insomnia
app.post('/cadmongoprodutos', (req, res, next) => { 
  let newprod = {
      item: req.body.item,
      tipo: req.body.tipo,  
  }
  conn(
    (error, result)=> {
      result.db('lojarecode').collection('produtos').insertOne(newprod, (error, inserido)=> {
        res.json({mensagem: "Produtos inserido com sucesso!", produtos: inserido})
      })
    }
  )
})

//deletar usuario
//test insomnia
app.delete('/delmongoprodutos', (req, res, next)=> { 
    conn(
      (error, result)=> {
        let delproduto = { item: req.body.item}
        result.db('lojarecode').collection('produtos').deleteOne(delproduto, (error, produto)=> {
          res.json({msg: "Produto excluido com sucesso!"})
        })
      }
  )
})


//links
app.listen(4000, ()=> {
    console.log('api: http://localhost:4000/user')
    console.log('app: http://localhost:4000/')
})

