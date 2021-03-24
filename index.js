const express = require('express');

const app = express();

//  create a route handler
app.get('/', (req, res) => {
  res.send({ hi: "Im on heroku" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
