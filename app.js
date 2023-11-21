import express, { urlencoded, json } from 'express';
import cors from 'cors';
const app = express();

import { sync } from "./config/database";
import index from './routes/index';
import userRoute from './routes/user.routes';

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', userRoute);

(async () =>{
    try {
      await sync(
        {force: false}
      );
      console.log("DB Connection Successfully");
      app.listen(8080,()=>{
        console.log(`Server is running on port ${8080}.`);
    })
    } catch (error) {
      console.error(error);
    }
  })()

export default app;