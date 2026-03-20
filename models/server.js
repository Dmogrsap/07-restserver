
import express from 'express';
import cors from 'cors';


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        //this.app.use(express.static('public'));
        this.middlewares();

        this.routes();

    }

    middlewares() {
        //Public Folder
        this.app.use(express.static('public'));

        //CORS
        this.app.use(cors());    }


    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'get API'
            });
        });

        this.app.put('/api', (req, res) => {
            res.status(500).json({
                ok: true,
                msg: 'put API'
            });
        });

        this.app.post('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'post API'
            });
        });

        this.app.delete('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'delete API'
            });
        });

        this.app.patch('/api', (req, res) => {
            res.json({
                ok: true,
                msg: 'patch API'
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server is running on PORT: ', this.port);
        });
    }

}

// module.exports = Server;
export default Server;