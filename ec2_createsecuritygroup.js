import { ec2Client } from "./libs/ec2Client.js"
import { CreateSecurityGroupCommand, DescribeVpcsCommand, AuthorizeSecurityGroupIngressCommand } from "@aws-sdk/client-ec2";

const params = { KeyName: "Ahmed_keypair_dev" };

let vpc = null;

const run = async () => {
   try {
    const data = await ec2Client.send(new DescribeVpcsCommand(params));
    vpc = data.Vpcs[0].VpcId;
    console.log("VPC details: ", vpc);
    return data;
   } catch (error) {
    console.log("Error", error);
   }
}

run();