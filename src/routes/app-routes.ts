import { Router } from "express";
import { MailRoutes } from "./routes";


export class AppRoutes{
    static get routes(): Router {
        const router = Router();

        router.use('/', MailRoutes.routes);

        return router;
    }
}