import * as React from "react";
import Head from "next/head";

function DemoPage() {
  return (
    <div>
      <Head>
        <title>Pusher Demo</title>
        <script src="https://js.pusher.com/7.0/pusher.min.js"></script>
        <script src="/rtc-demo.js"></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Demo Page</h1>
    </div>
  );
}

export default DemoPage;
