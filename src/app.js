const express = require('express');
const path = require('node:path');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./modules/user/user.routes');
const transporter = require('./helpers/mailer');
const errorRoutes = require('./routes/error.routes');
const apiv1Routes = require('./routes/apiv1.routes');
require('dotenv').config();

// transporter.sendMail({
//     to: 'i.terayo@gmail.com',
//     subject: 'prueba de nodemailer',
//     html: '<h1> Bienvenido a mi aplicacion de chat </h1>'
// })

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/avatar', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.send('OK');
});

apiv1Routes(app)

errorRoutes(app);

app.listen(PORT, () => {
    console.log(`servidor escuchando el puerto ${PORT}`);
})