import express from 'express';
import cors from "cors";
import compression from 'compression';
import helmet from "helmet";
import morgan from "morgan";
import { createServer } from "http";
import listRoutes from "express-list-routes";
import { appRouter } from '../routes/web.js';
import asynchandler from '../li/asyncHanler.js';






const app = express();
const server = createServer(app);


app.use( asynchandler());
app.use( express.json());
app.use( cors());
app.use( morgan("dev"));
app.use( helmet());
app.use( compression);
app.use( express.urlencoded({ extended: true}));

app.get("/health", (req, res) =>
  res.json({ success: true, message: "Server is running on po" })
);
app.get("/request-object", (req, res) => {
  console.info(req);
  return res.json({ success: true, message: "Request object" });
});
app.use('/api/v1', appRouter)
app.use("*", (req, res) => {
  const url = req.originalUrl;

  return res.status(404).json({
    success: false,
    message: "Route ${url} does not exist on this server",
  });
});


listRoutes(app);
export { server, app}
