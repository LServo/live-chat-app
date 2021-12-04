import express from 'express'

import { createServer } from 'http'
import { Server, Socket } from 'socket.io'
import path from 'path'

import './database'
import { router } from './routes'

const app = express()

app.use(express.static(path.join(__dirname, '..', 'public'))) // definindo caminho estático pro front end
app.set('views', path.join(__dirname, '..', 'public')) // dizendo que a pasta views está dentro de public
app.engine('html', require('ejs').renderFile) // definindo engine como html, por padrão é ejs
app.set('view engine', 'html') // setando view engine como html

app.get('/pages/client', (req, res) => res.render('html/client.html'))
app.get('/pages/admin', (req, res) => res.render('html/admin.html'))

const http = createServer(app) // criando protocolo http
const io = new Server(http) // criando protocolo de web socket

io.on('connection', (socket: Socket) => {
  // criando novo servidor e ouvindo a conexão para passar o socket id quando ocorrer
  console.log('Se conectou', socket.id)
})

app.use(express.json())
app.use(router)

export { http, io }
