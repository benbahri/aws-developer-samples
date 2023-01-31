import { EC2Client } from  "@aws-sdk/client-ec2";

const REGION = "us-east-1";
const ec2Client = new EC2Client({ REGION });
export { ec2Client };