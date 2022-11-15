import { Injectable } from '@angular/core';
import Mailjet from 'node-mailjet';
import { MJ_APIKEY_PRIVATE, MJ_APIKEY_PUBLIC } from './constant';


@Injectable({
  providedIn: 'root'
})
export class MailingService {

  constructor() { }

  sendTestEmail() {
    const mailjet = Mailjet.apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);
    const request = mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: "mkhatiwada001@my.wilmu.edu",
              Name: "Mailjet Pilot"
            },
            To: [
              {
                Email: "mesrajk@hotmail.com",
                Name: "passenger 1"
              }
            ],
            Subject: "Your email flight plan!",
            TextPart: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
          }
        ]
      })
    
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })
  }
}
