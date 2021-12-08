import express from 'express';
import { createConnection } from 'typeorm';
import routes from './routes';
import { globalErrors } from './middlewares/globalErrors';

createConnection().then(conection => {
const app = express();
const PORT = 3333;

app.use(express.json())
app.use(routes)

app.use(globalErrors)


app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
});
}).catch((error) => {
  console.log("Unable to connect to the database",error);
});

/*
app.get('/', (request, response) =>
  response.json({
    message: 'Meu server Express, Typescript e ESLint!',
  }),
);

app.listen(3333, () => {
  console.log('Back-end started in 3333 port!');
});*/

