import express, { Express, Request, Response } from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config();

const app: Express = express()
const PORT = process.env.PORT || 8000

/*===== Middlewares =====*/
//Json
app.use(express.json())
//Cors Policy
app.use(cors())


app.listen(PORT, () => {
    console.log(`Server is runing at port: http://localhost:${PORT}`);
})