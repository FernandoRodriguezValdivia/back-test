import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 0, message: 'hola mundo' });
});

app.listen(port, () => {
  console.log('server is running in port: ', port);
});
