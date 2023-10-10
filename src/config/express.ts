import bodyParser from "body-parser";
import express from "express";
import { userRouter } from "../modules/user/adapters/user.controller";
import path from 'path';
const cors = require('cors');
const app = express();

app.use(express.static(path.join(__dirname,'../public')));
app.use(
    cors({
        origin: '*'
    })
);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json({
    limit: '20mb'
}))

// app.get('/', (req,res) => {
//     res.send('server running asies mi mamawuevo...');
// });
//ROUTES
app.use('/api/user',userRouter);

export default app;