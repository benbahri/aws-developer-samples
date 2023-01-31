import { ec2Client } from "./libs/ec2Client.js"
import { RunInstancesCommand, CreateTagsCommand} from "@aws-sdk/client-ec2";

const params = { 
    ImageId: "ami-0aa7d40eeae50c9a9", InstanceType: "t2.micro", KeyName: "Ahmed_keypair_dev", MinCount: 1, MaxCount: 1,
 }

 const run = async () => { 
    try {
        let ec2command = new RunInstancesCommand(params);
        const data = await ec2Client.send(ec2command);
        const instanceId = data.Instances[0].InstanceId;
        console.log("created instance: ", instanceId);

        const tagParams = { 
            Resources: [instanceId],
            Tags: [{ Key: "Name", Value: "SDK-powered-VM", },],
         };
         try {
            await ec2Client.send(new CreateTagsCommand(tagParams));
            console.log("Instance tagged: ", instanceId )
         } catch (error) {
            
         }

    } catch (error) {
        console.log("Error", err)
    }
  }

  run();