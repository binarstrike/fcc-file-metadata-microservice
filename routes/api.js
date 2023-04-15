import { Router } from "express"
import multer from "multer"
import { join } from "path"

export const router = Router()
const upload = multer({ dest: join(process.cwd(), "public/uploads/") })

router.get("/", (req, res) => res.send("Hello World"))

router.post("/fileanalyse", upload.single("upfile"), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file
  res.json({ name, type, size })
})

export default router
