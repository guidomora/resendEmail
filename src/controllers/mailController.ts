import { Request, Response } from "express";
import { SendingMail } from "../service/mailService";

export class MailController {
    public async sendMail(req:Request, res:Response) {
        const result = await SendingMail()
        res.status(200).json({message: 'Mail sent'})
    }
}