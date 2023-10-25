const { app } = require('./app');

const port = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Running on http://localhost:${port}`);
});
