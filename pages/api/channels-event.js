const Channels = require("pusher");

const ch = new Channels({
  appId: process.env.PUSHER_APP_ID,
  key: "f859a684df14b115b8c3",
  secret: process.env.PUSHER_APP_SECRET,
  cluster: "ap3",
});

module.exports = (req, res) => {
  const data = req.body;
  ch.trigger("my-channel", "my-event", data, () => {
    res.status(200).end("sent event successfully");
  });

  res.status(200).end(`sent event successfully`);
};
