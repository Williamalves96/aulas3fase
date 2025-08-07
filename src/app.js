import express from "express"
import { prismaClient } from "../prisma/Prisma.js"

const app = express()
app.use(express.json())

    app.get('/usuarios',async (request,response) =>{
        try{
            const usuarios = await prismaClient.usuario.findMany();
            return response.json(usuarios)
        }
        catch(e){
            console.log(e)
        }
    })

app.listen(3000, ()=> console.log("Api rodando"))