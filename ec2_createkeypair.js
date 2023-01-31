import { ec2Client } from "./libs/ec2Client.js"
import { CreateKeyPairCommand } from "@aws-sdk/client-ec2";

const params = { KeyName: "Ahmed_keypair_dev" }

const run = async() => { 
    try {
        let keypairCommand = new CreateKeyPairCommand(params);
        const data = await ec2Client.send(keypairCommand);
        console.log("Success", data);
        return data;
    } catch (error) {
        console.log("Error", err);
    }
 }

 run();
