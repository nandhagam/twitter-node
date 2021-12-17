import express from "express";
import cors from 'cors';
import {json} from 'body-parser';

import tweetRoutes from './twitter-apis/twitter-apis.routes'

const port = process.env.port || 3000;
const app = express();

app.use(cors());
app.use(json());

app.use('/', tweetRoutes)

app.listen(port, () => {
    console.log("The server is listening in the port " + port + ".");
})
