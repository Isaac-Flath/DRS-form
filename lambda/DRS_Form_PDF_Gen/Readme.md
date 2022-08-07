# PDF Generation Lambda Function


## Deploy Instructions
### Adding Dependency

A dependency can be added into the `package` directory using `pip install --target ./package requests`

### Creating Deployment Package

```bash
cd package
zip -r ../Deploy.zip .

cd ..
zip -g Deploy.zip lambda_function.py
```

### Deploy

Upload `Deploy.zip` deployment package to Lambda function in console

## Function Information
