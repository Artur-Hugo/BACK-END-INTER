import express from 'express';
import routes from './routes';
import { globalErrors } from './middlewares/globalErrors';

const app = express();
const PORT = 3333;

app.use(routes)

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})

/*
app.get('/', (request, response) =>
  response.json({
    message: 'Meu server Express, Typescript e ESLint!',
  }),
);

app.listen(3333, () => {
  console.log('Back-end started in 3333 port!');
});*/

