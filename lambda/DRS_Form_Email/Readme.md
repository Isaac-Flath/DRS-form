# Send Email Lambda Function


## Deploy Instructions
### Adding Dependency

A dependency can be added into the `package` directory using `npm install nodemailer`

### Creating Deployment Package

```bash
cd package
zip -r ../sendEmailToDeploy.zip .

cd ..
zip -g my-sendEmailToDeploy.zip index.js
```

### Deploy

Upload `sendEmailToDeploy.zip` deployment package to Lambda function in console

## Function Information
