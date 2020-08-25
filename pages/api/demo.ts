import { NowRequest, NowResponse } from "@vercel/node";
const { channels_app_id: appId } = process.env;

export default (req: NowRequest, res: NowResponse) => {
  res.json({ name: "John", email: "john@example.com", env: appId });
};
