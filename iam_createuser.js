import { iamClient } from "./libs/iamClient.js"
import { CreateUserCommand, GetUserCommand } from "@aws-sdk/client-iam";

export const params = { UserName: "Datascientest-user" };

export const run = async () => { 
    try {
        let checkUser = new GetUserCommand(params);
        const data = await iamClient.send(checkUser);
        console.log("User "+params.UserName+" exists: ", data.User.UserId);
        return data;
    } catch (error) {
        try {
            const results = await iamClient.send(new CreateUserCommand(params));
            console.log("success", results);
            return results;
        } catch (error) {
            console.log(error);
        }
        console.log("Error", error);
    }
 }

run();