const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { recordsRouter } = require('./controller/records');

const app = express();
const PORT = 3000 // || process.env.PORT No tenia mucho sentido crear el dotenv para producción en este ejercicio;

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect('mongodb+srv://luisnavarrofs:XUAeksZPbmxWr4xz@cluster0.bdosxvj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('connected to mongodb') // igual que en el puerto, en este caso para esconder la url process.env.MONGODB_URL
  })
  .catch(() => {
    console.log('error mongodb')
  })

app.use('/', recordsRouter)

app.listen(PORT, () => {
  console.log(`Listening server on http://localhost:${PORT}`);
});
