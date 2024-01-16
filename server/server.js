const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { recordsRouter } = require('./controller/records');

const app = express();
const PORT = parseInt((process.env.PORT || '3000'), 10)

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect('mongodb+srv://luisnavarrofs:XUAeksZPbmxWr4xz@cluster0.bdosxvj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('connected to mongodb') 
  // para esconder la contraseña en produccion vendría bien usar dotenv y usar la url process.env.MONGODB_URL
  })
  .catch(() => {
    console.log('error mongodb')
  })

app.use('/', recordsRouter)

app.listen(PORT, () => {
  console.log(`Listening server on http://localhost:${PORT}`);
});
