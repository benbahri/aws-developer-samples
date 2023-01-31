import { ec2Client } from "./libs/ec2Client.js"
import { RunInstancesCommand } from "@aws-sdk/client-ec2";

// KEY_PAIR-NAME: Ahmed_keypair_dev
//Image_ID: ami-0aa7d40eeae50c9a9

const params = { 
    ImageId: "ami-0aa7d40eeae50c9a9",
    InstanceType: "t2.micro",
    KeyName: "Ahmed_keypair_dev",
    MinCount: 1,
    MaxCount: 1,
 }

 const run = async () => { 
    try {
        let ec2command = new RunInstancesCommand(params);
        const data = await ec2Client.send(ec2command);
        const instanceId = data.Instances[0].InstanceId;
        console.log("created instance: ", instanceId);
    } catch (error) {
        console.log("Error", err)
    }
  }

  run();