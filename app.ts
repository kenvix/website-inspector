import * as superagent from "superagent";
import * as nodemailer from "nodemailer";

(async () => {
    while (true) {
        const target = "http://tygl.nuc.edu.cn/admin/chooseCurriculum/chooseTeachingCurriculum/";
        try {
            let info = await superagent.get(target).set('Cookie','JSESSIONID=YOUR cookie');
            console.dir(info);
            for (let i = 0; i < 10; i++) {
                console.log("OK!!!!!!!");
            }
            const mailTransport = nodemailer.createTransport({
                host : 'YOUR SMTP',
                port : 80,
                secure: false,
                auth : {
                    user : 'YOUR SMTP',
                    pass : 'YOUR SMTP'
                }
            });
            const mailOptions = {
                from: 'YOUR SMTP',
                to: 'YOUR SMTP',
                subject: '这智障选课系统能用了！',
                text: '这智障选课系统能用了！'
            };
            await new Promise((resolve,reject) => {
                mailTransport.sendMail(mailOptions, function(err, msg){
                    if(err) return reject(err);
                    resolve(msg);
                });
            });
            break;
        } catch (e) {
            console.warn("STILL UNAVAILABLE " + e.status);
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
})();