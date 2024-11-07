import { Resend } from 'resend';
import { envs } from '../config/envs';
import fs from 'fs/promises';
import path from 'path';

const resend_key = envs.RESEND
const resend = new Resend(resend_key);

export async function SendingMail() {
    const filePath = path.join(__dirname, '../../template.html');
    const htmlContent = await fs.readFile(filePath, 'utf-8');
    const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['guidomora161@gmail.com'],
        subject: 'Hello World',
        html: htmlContent,
    });

    if (error) {
        return console.error({ error });
    }

    console.log({ data });
}
