let channels = new Pusher("f859a684df14b115b8c3", {
  cluster: "ap3",
});
let channel = channels.subscribe("my-channel");

channel.bind("my-event", function (data) {
  console.log(`data`, data);
});

async function pushData(data) {
  const res = await fetch("/api/channels-event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.error("failed to push data");
  }
}
