import * as React from "react";
import { InitializedPuser, onSendMessage } from "./pusher";

export default function PusherContainer() {
  React.useEffect(() => {
    InitializedPuser();
  });

  const onTapForSendMessage = React.useCallback(() => {
    onSendMessage({
      name: "Picard",
      message: "Hi!",
    });
  }, []);

  return (
    <>
      <button onClick={onTapForSendMessage}>メッセージを送る</button>
    </>
  );
}
