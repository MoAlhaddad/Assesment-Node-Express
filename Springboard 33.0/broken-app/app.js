const express = require('express');
const ExpressError = require("./expressError");
const {
  createDevPromises,
  createDevResponses,
  userData
} = require("./app.helpers.js")

const app = express();
app.use(express.json());

app.post('/', async function(req, res, next) {
  try {
    const devList = req.body.developers;

    const devPromises = createDevPromises(devList);    
    const devResponses = await createDevResponses(devPromises);
    if (devResponses) {
      const output = await userData(devResponses);
      return res.json(output);
    } else {
      throw new ExpressError("unable to fulfill request", 400);
    }
  } catch(err) {
    return next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 404;
  const msg = err.msg;

  return res.status(status).json({ error: { msg, status } });
});

app.listen(3000, ()=> {
  console.log("Starting up on port 3000");
});