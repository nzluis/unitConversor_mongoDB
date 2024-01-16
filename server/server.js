const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { recordsRouter } = require('./controller/records');
const path = require('path')

const app = express();
const PORT = parseInt((process.env.PORT || '3000'), 10)

app.use(express.json())
app.use(cors({ origin: 'http://localhost:5173' }));

mongoose.connect('mongodb+srv://luisnavarrofs:XUAeksZPbmxWr4xz@cluster0.bdosxvj.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log('connected to mongodb') 
  // para esconder la contraseña en produccion vendría bien usar dotenv y usar la url process.env.MONGODB_URL
  // la mantengo para que se pueda ver modo dev
  })
  .catch(() => {
    console.log('error mongodb')
  })

app.use('/', recordsRouter)

app.use(express.static(path.join(__dirname, '../dist/')))
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../dist/index.html'))
)

app.listen(PORT, () => {
  console.log(`Listening server on http://localhost:${PORT}`);
});
