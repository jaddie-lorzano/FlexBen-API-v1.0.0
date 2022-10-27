import {} from 'dotenv/config'
import { Express, json } from 'express'
import { Jwt } from 'jsonwebtoken';
const app = Express();
const jwt = Jwt();

app.use(json);

let refreshTokens = [];

app.route('/token')
    .all((req, res) => {
        const refreshToken = req.body.token;
        if(refreshToken == null) {
            return res.status(404).json({
                status: 404,
                statusText: 'Not Found',
                message: 'Invalid Refresh Token',
                error: {
                    code: 'NOT_FOUND',
                    message: 'Invalid Refresh Token'
                }
            });
        };
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(404).json({
                status: 404,
                statusText: 'Not Found',
                message: 'Invalid Refresh Token',
                error: {
                    code: 'NOT_FOUND',
                    message: 'Invalid Refresh Token'
                }
            });
        }
    });

app.route('/logout')
    .all((req, res) => {
        refreshTokens = refreshTokens.filter(token => token !== req.body.token);
        res.send(204).json({
            status: 204,
            statusText: 'No Content',
            message: 'User logged out'
        });
    });

app.route('/login')
    .post((req, res) =>{

    })
