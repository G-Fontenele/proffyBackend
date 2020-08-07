import express from 'express';
import cors from 'cors';

import routes from './routes';

import {url_local, url_server, port} from './config';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);