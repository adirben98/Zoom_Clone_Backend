import express from 'express'
const app=express()
import { createServer } from 'http'
import io from './socket_server'

const server=createServer(app)
io(server)
server.listen(3000)