import * as React from "react";
import Head from "next/head";

function DemoPage() {
  return (
    <div>
      <Head>
        <title>Pusher Demo</title>
        <script src="/rtc-demo.js"></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Pusher Demo!</p>
    </div>
  );
}

export default DemoPage;
