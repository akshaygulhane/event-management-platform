import { Router, Request, Response } from 'express'

const router:Router = Router()

router.get('/', (_req: Request, res: Response) => {
    res.send({
        "message": "Success"
    })
})


export default router
