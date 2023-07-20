// Import required modules
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

// Create a new Koa app
const app = new Koa();
const router = new Router();

// Use bodyParser middleware to parse request body
app.use(bodyParser());

// Define a basic route
router.get('/', async (ctx) => {
  ctx.body = 'Hello, Koa!';
});
const GetInformation = require("./src/GetInformation");
const getInfo = new GetInformation();
router.get('/:category/:title', async (ctx) => {
    let result = await getInfo.execute(ctx.params);
    console.log("-----ONTHEGETREQUEST-------------------------", ctx.params);
    ctx.body = result.body;
    ctx.status = result.status;
    ctx.message = result.message;
    // => { category: 'programming', title: 'how-to-node' }
});
const AddTwoNumber = require("./src/AddTwoNumber");
const addTwoNumber = new AddTwoNumber();
// Define a route that accepts POST requests and echoes the request body
router.post('/echo/:firstNumber/:secondNumber', async (ctx) => {
    console.log("-----ONTHEPOSTREQUEST-------------------------", ctx.params);
    let result = await addTwoNumber.execute(ctx.params);
    ctx.body = result.body;
    ctx.status = result.status;
    ctx.message = result.message;
});

// Tell the app to use the defined routes
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
