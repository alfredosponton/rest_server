const {response} = require('express')

const userGet = (req, res = response) => {
    //http://localhost:8080/api/users?q=hola&nombre=alfredo&limit=10
    const {q, nombre, page = 1, limit} = req.query;

    res.json({
        ok: true,
        name: 'get api controller',
        q,
        nombre,
        page,
        limit
    })
  } 

  const userPut = (req, res) => {
      const id = req.params.id;
     //const {id} = req.params; es otra opción
      
    res.json({
        ok: true,
        name: 'put api - controller'
    })
  }

const userPost = (req, res) => {

    const {nombre, edad} = req.body
    res.json({
        ok: true,
        nombre,
        edad
    })
  }

  const UserDelete = (req, res) => {
    res.json({
        ok: true,
        name: 'delete api - controller'
    })
  }
  module.exports = {
    userGet,
    userPut,
    userPost,
    UserDelete
  }