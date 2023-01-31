import { ec2Client } from "./libs/ec2Client.js"
import { CreateSecurityGroupCommand, DescribeVpcsCommand, AuthorizeSecurityGroupIngressCommand, AttachNetworkInterfaceCommand } from "@aws-sdk/client-ec2";

const params = { KeyName: "Ahmed_keypair_dev" };

let vpc = null;

const run = async () => {
   try {
    const data = await ec2Client.send(new DescribeVpcsCommand(params));
    vpc = data.Vpcs[0].VpcId;
    console.log("VPC details: ", vpc);
   } catch (error) {
    console.log("Error", error);
   }

   try {
    const paramSecurityGroup = { 
        Description: "SG created with nodejs SDK ",
        GroupName: "NODEJS_SDK_Security_Group",
        VpcId: vpc,
    };
    const datasg = await ec2Client.send(new CreateSecurityGroupCommand(paramSecurityGroup));
    const groupId = datasg.GroupId;
    console.log("Success", groupId);

    const ingressParams = { 
        GroupId: groupId,
        IpPermissions:[
            { 
                IpProtocol: "tcp", FromPort: 80, ToPort: 80, IpRanges: [{ CidrIp: "0.0.0.0/0"}],
            } ,
            { 
                IpProtocol: "tcp", FromPort: 22, ToPort: 22, IpRanges: [{ CidrIp: "0.0.0.0/0"}],
            }
        ]
    };
 
   const data = await ec2Client.send(new AuthorizeSecurityGroupIngressCommand(ingressParams));
   console.log(data);
   return data;

   } catch (error) {
    console.log("Error", error);
   }
}

run();