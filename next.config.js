module.exports = {
  env: {
    BRANCH: process.env.BRANCH || process.env.NODE_ENV,
    PUSHER_APP_ID: process.env.PUSHER_APP_ID,
    PUSHER_APP_SECRET: process.env.PUSHER_APP_SECRET,
  },
};
