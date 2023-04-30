import { app, port } from './app/app';
import { connectToDatabase } from './database/database';

connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
