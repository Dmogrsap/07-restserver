import dotenv from 'dotenv'
import Server from './models/server.js'
import express from 'express'

dotenv.config()

const server = new Server();

server.listen();