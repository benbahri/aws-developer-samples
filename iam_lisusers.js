import { iamClient } from "./libs/iamClient.js"

import { ListUsersCommand } from "@aws-sdk/client-iam";

// Set the parameters.
export const params = { MaxItems: 10 };

export const run = async () => {
  try {
    
    const data = await iamClient.send(new ListUsersCommand(params));
    //console.log(data)
    var users = data.Users || [];
    users.forEach(function (user) {
        console.log("User " + user.UserName + " created", user.CreateDate);
    });
  } catch (err) {
    console.log("Error", err);
  }
};
run();