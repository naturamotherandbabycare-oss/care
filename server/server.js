import app from './src/app.js';
import env from './src/config/env.js';

const PORT = env.port;

app.listen(PORT, () => {
  console.log(`\n🧹 Natura Cleaning Service API`);
  console.log(`   Environment: ${env.nodeEnv}`);
  console.log(`   Server:      http://localhost:${PORT}`);
  console.log(`   Health:      http://localhost:${PORT}/api/health`);
  console.log(`   Client URL:  ${env.clientUrl}\n`);
});
