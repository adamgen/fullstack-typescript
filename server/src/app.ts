import express from 'express';
import * as bodyParser from 'body-parser';

import {usersGet} from './resources/users';

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(usersGet);
app.listen(app.get('port'));
