# Send Email Lambda Function


## Deploy Instructions
### Adding Dependency

A dependency can be added into the `package` directory using `npm install nodemailer`

### Creating Deployment Package

```bash
cd package
zip -r ../Deploy.zip .

cd ..
zip -g Deploy.zip index.js
```

### Deploy

Upload `Deploy.zip` deployment package to Lambda function in console

## Function Information
