import * as React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
const PusherContainer = dynamic(
  () => import("../src/PusherContainer").then((component) => component),
  {
    ssr: false,
  }
);

const env = {
  BRANCH: process.env.BRANCH,
};

function DemoPage() {
  return (
    <div>
      <Head>
        <title>Pusher Demo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Pusher Demo Page</h1>
      <p>{env.BRANCH}</p>
      <PusherContainer />
    </div>
  );
}

export default DemoPage;
