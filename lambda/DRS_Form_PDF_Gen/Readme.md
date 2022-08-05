# PDF Generation Lambda Function


## Deploy Instructions
### Adding Dependency

A dependency can be added into the `package` directory using `pip install --target ./package requests`

### Creating Deployment Package

```bash
cd package
zip -r ../my-deployment-package.zip .

cd ..
zip -g my-deployment-package.zip lambda_function.py
```

### Deploy

Upload `my-deployment-package.zip` deployment package to Lambda function in console

## Function Information
