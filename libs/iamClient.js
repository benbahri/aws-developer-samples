import { IAMClient } from "@aws-sdk/client-iam";
const REGION = "us-east-1"; //e.g. "us-east-1"

const iamClient = new IAMClient({ region: REGION });
export { iamClient };