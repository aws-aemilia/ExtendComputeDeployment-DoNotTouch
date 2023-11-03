import express from 'express';

const app: express.Application = express();
const port = 3000;

app.use(express.text());

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});

// Homepage
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send("homepage");
});

// Runtime
app.get('/runtime', (req: express.Request, res: express.Response) => {
  const runtime = process.env.AWS_EXECUTION_ENV;
  res.status(200).send(runtime);
});

// Get
app.get('/get', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-get-header", "get-header-value").send("get-response-from-compute");
});

// Post
app.post('/post', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-post-header", "post-header-value").send(req.body.toString());
});

// Put
app.put('/put', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-put-header", "put-header-value").send(req.body.toString());
});

// Patch
app.patch('/patch', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-patch-header", "patch-header-value").send(req.body.toString());
});

// Delete
app.delete('/delete', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-delete-header", "delete-header-value").send();
});

// staticToCompute fallback
app.get('/staticToCompute', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-static-to-compute-header", "static-to-compute-header-value").send("static-to-compute");
});

// ahioToCompute fallback
app.get('/ahioToCompute', (req: express.Request, res: express.Response) => {
  res.status(200).header("x-ahio-to-compute-header", "ahio-to-compute-header-value").send("ahio-to-compute");
});