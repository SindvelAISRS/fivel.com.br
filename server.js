import express from 'express';
import __root_dir from "./root-dir.mjs";
const app = express();
const public_dir = 'src';
import fs from 'fs';
import https from 'https'

app.use('/', express.static(path.join(__root_dir, public_dir)));

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

const options = {
    key: fs.readFileSync('../ssl/certs/_wildcard__fivel_com_br_bfd67_f8427_1752165815_216442b41238eb418b9639c8b856b0cc.crt/'),
    cert: fs.readFileSync('../ssl/certs/bfd67_f8427_cafb041fdb58ab0f8ebe12101b57f348.key'),
};

let port = 443;

let server = https.createServer(options, app).listen(port, () => {
    console.log(`[main] Listening to port ${port}`);
});