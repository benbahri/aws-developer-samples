import { ec2Client } from "./libs/ec2Client.js"
import { RebootInstancesCommand, DescribeInstancesCommand} from "@aws-sdk/client-ec2";


const run = async () => {
    try {

       const ec2data = await ec2Client.send(new DescribeInstancesCommand({}));
       const instance = ec2data.Reservations[0].Instances[0].InstanceId;
       //console.log("sucess", ec2data.Reservations[0].Instances[0].InstanceId);
       const params = { InstanceIds: [instance]}

        const data = await ec2Client.send(new RebootInstancesCommand(params));
        console.log("sucess", data);
        
        return data;
    } catch (error) {
        console.log("Error", error);
    }
}

run ();