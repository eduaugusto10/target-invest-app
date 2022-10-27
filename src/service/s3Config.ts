

/* AWS S3 config options */
/* Highly recommended to declare the config object in an external file import it when needed */
export const s3Config = {
    bucketName: process.env.BUCKET,
    dirName: process.env.DARF,
    region: process.env.REGION,
    accessKeyId: process.env.ACCESSKEYID,
    secretAccessKey: process.env.SECRETACCESSKEY
}

/* End of s3Config.ts */