import express, {Express} from 'express'
import {json, urlencoded} from "body-parser"
import cors from "cors";
import userRouter from "./routes/user.routes"
import hpp from "hpp"
const app: Express = express()

const origin = ["*"]
app.use(
    cors({origin})
)

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(hpp())

app.use("/api/v1/users", userRouter )


export default app