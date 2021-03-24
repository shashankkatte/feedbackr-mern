const express = require('express');
require('./services/passport');


const app = express();

//  create a route handler
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
