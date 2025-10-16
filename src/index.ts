import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});