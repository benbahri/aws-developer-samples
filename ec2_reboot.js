import { ec2Client } from "./libs/ec2Client.js"
import { RebootInstancesCommand} from "@aws-sdk/client-ec2";

const params = { InstanceIds: ["i-0cb0e0b37f060248f"]}

const run = async () => {
    try {
        const data = await ec2Client.send(new RebootInstancesCommand(params));
        console.log("sucess", data);
        return data;
    } catch (error) {
        console.log("Error", error);
    }
}

run ();