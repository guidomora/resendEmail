import { Router } from "express";
import { MailController } from "../controllers/mailController";


export class MailRoutes {
    static get routes(): Router {
        const router = Router()

        const mailController = new MailController()
        
        router.get('/mail', mailController.sendMail)

        return router
    }
}