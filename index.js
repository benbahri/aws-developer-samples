import { DeleteBucketCommand, DeleteObjectCommand ,ListObjectsCommand} from "@aws-sdk/client-s3";
import { s3Client } from "./libs/sampleClient.js";

export const bucketParams = { Bucket: "datascientest-ahmed-sdkdemo"};

export const run = async () => { 
    try {
   
       const s3objects = await s3Client.send(new ListObjectsCommand(bucketParams));
       let s3items = s3objects.Contents;

       for (let i = 0; i < s3items.length; i++) {
              console.log("- Deleting Object: "+s3items[i].Key);
              await s3Client.send( 
                        new DeleteObjectCommand({ 
                            Bucket: bucketParams.Bucket,
                            Key: s3items[i].Key,
                        }) 
                    );
       }
       console.log("=> Succes: S3 bucket is empty! ")

        const data = await s3Client.send(new DeleteBucketCommand (bucketParams));
        console.log( "Bucket deleted " + data );
        return data;

    } catch (error) {
        console.log("- Error: ", error);
    }
 };

 run();