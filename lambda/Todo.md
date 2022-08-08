# Lambda Functions:

## DRS_Form_PreProcessing:  Processes data into `obj` format
+ Taks (Farukh)
  + ~~Move getData logic from front end to this lambda function~~
  + ~~Call DRS_Form_PDF_Gen~~
## DRS_Form_Write_DB:  Receive raw user input data and stores data in dynamoDB
+ Tasks (Farukh)
  + ~~Copy write DB logic from DRS_Form_To_DRS_Backend_Table~~
## DRS_Form_Email: Receives S3 key and “to” email address and emails pdf
+ Tasks (Isaac):
  + ~~Modify to use `event` argument so Key and “to” are not hard coded~~
  + Authenticate DRS email address to send from official email instead of Farukh’s
## DRS_Form_PDF_Gen: Receives `obj` format json and generates PDF, stores in S3, and calls DRS_Form_Email
+ Tasks (Isaac)
  + ~~Rename lambda function~~
  + ~~Call DRS_Form Email~~
## DRS_Form_Batch_Upload:
+ Tasks (Isaac)
  + Triggers on CSV file upload
  + For each row, call
    + DRS_Form_PreProcessing
    + DRS_Form_Write_DB
