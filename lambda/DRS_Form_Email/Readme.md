# Send Email Lambda Function


## Deploy Instructions
### Adding Dependency

A dependency can be added into the `package` directory using `npm install nodemailer`

### Creating Deployment Package

```bash
cd package
zip -r ../Deploy.zip .

cd ..
zip -g Deploy.zip lambda_function.js
```

### Deploy

Upload `sendEmailToDeploy.zip` deployment package to Lambda function in console

## Function Information
