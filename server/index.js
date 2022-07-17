require('dotenv/config');
const path = require('path');
const express = require('express');
const errorMiddleware = require('./error-middleware');

const app = express();
const publicPath = path.join(__dirname, 'public');

if (process.env.NODE_ENV === 'development') {
  app.use(require('./dev-middleware')(publicPath));
} else {
  app.use(express.static(publicPath));
}

// app.get('https://zenquotes.io/api/quotes', async (req, res) => {
//   try {
//     const result = res.json();
//     res.status(201).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: 'an unexpected error occured'
//     });
//   }
// });

app.use(errorMiddleware);

const cors = require('cors');
app.use(cors);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
