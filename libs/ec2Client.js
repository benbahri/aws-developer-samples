const { EC2Client } = require("@aws-sdk/client-s3");

const REGION = "us-east-1";
const ec2Client = new EC2Client({ REGION });
export { ec2Client };