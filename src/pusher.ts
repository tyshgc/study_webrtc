import Pusher from "pusher-js";

export function InitializedPuser() {
  if (typeof window !== "undefined") {
    const pusher = new Pusher("f859a684df14b115b8c3", {
      cluster: "ap3",
    });
    const channel = pusher.subscribe("my-channel");

    channel.bind("my-event", function (data: any) {
      console.log(`data`, data);
    });
  }
}

export async function onSendMessage(data: any) {
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
