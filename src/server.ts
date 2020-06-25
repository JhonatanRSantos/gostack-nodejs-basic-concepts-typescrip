import app from './app';
import './config/config';

app.listen(Number(process.env.APP_PORT) || 3333, () => {
  console.info(`🚀 Server started on port ${process.env.APP_PORT || 3333}!`);
  console.info(`[MODE] ${process.env.NODE_ENV}`);
});
