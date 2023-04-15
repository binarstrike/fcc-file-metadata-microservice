import api from "./routes/api.js"
import express from "express"
import cors from "cors"
import morgan from "morgan"
import { join } from "path"

const app = express()
const PORT = process.env.PORT || 3000

app.use((req, res, next) => next())
app.use(morgan("dev"))
app.use("/public", express.static(join(process.cwd(), "public")))
app.use(cors())

app.get("/", (req, res) =>
  res.sendFile(join(process.cwd(), "views/index.html"))
)

app.use("/api", api)

app.listen(PORT, () =>
  console.log(`Application is running... http://localhost:${PORT}`)
)
