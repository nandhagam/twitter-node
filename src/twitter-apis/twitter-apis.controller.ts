import {Request, RequestHandler, Response} from "express";
import twitter from "../config/twitter.tokens";

const verifyTwitterAccount = (req: Request<any>, res: Response<any>) => {
    twitter
        .get('account/verify_credentials')
        .then(user => {
            res.send(user);
        })
        .catch(error => {
            res.send(error);
        });
}

const searchTwits: RequestHandler = async (req: Request<any>, res: Response<any>) => {
    try {
        twitter.get('search/tweets', {
            q: 'banana since:2011-07-11',
            count: 100
        }, (err: Error, data: any, response: any) => {
            if (err) {
                res.status(400).json(err.message);
                return;
            }
            if (data) {
                console.log(data)
            }
        })
    } catch (e) {
        res.status(500).json(e);
    }
};

export {verifyTwitterAccount, searchTwits}
