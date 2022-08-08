// Loads in the AWS SDK
const AWS = require('aws-sdk');

// Creates the document client specifing the region 

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context, callback) => {
    // Captures the requestId from the context message
    const requestId = context.awsRequestId;

    if (
        event.admin && event.dateInput && event.email && event.firstName &&
        event.lastName && event.ethnicity && event.sex && event.age && event.legLength && event.company && event.rightSingleLegReleves &&
        event.leftSingleLegReleves && event.plank && event.rightSidePlank &&
        event.leftSidePlank && event.rightSingleLegBridges && event.leftSingleLegBridges &&
        event.rightHopTest1 && event.leftHopTest1 && event.rightHopTest2 &&
        event.leftHopTest2 && event.rightWallSit && event.leftWallSit && event.rightPasseReleveBalance && event.leftPasseReleveBalance &&
        event.rightPasseFlatFootBalance && event.leftPasseFlatFootBalance && event.ckcuest &&
        event.sitAndReach && event.RHTOF && event.LHTOF && event.RHTOD && event.LHTOD && event.workingLeg &&
        event.standingLeg && event.threeMonthInjury && event.fiveYearInjury
    ) {
        // Handle promise fulfilled/rejected states
        await createMessage(requestId, event).then(() => {
            callback(null, {
                statusCode: 201,
                body: '',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            });
        }).catch((err) => {
            console.error(err)
        })
    } else {
        callback(null, {
            statusCode: 400,
            body: 'Bad Request',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    }
};

// Function createMessage
// Writes message to DynamoDb table Message 
function createMessage(requestId, event) {

    const params = {
        TableName: 'DRS_Backend_Table',
        Item: {
            'DRS_Backend_Table_ID': requestId,
            'admin': event.admin,
            'dateInput': event.dateInput,
            'email': event.email,
            'firstName': event.firstName,
            'lastName': event.lastName,
            'ethnicity': event.ethnicity,
            'sex': event.sex,
            'age': event.age,
            'legLength': event.legLength,
            'company': event.company,
            'rightSingleLegReleves': event.rightSingleLegReleves,
            'leftSingleLegReleves': event.leftSingleLegReleves,
            'plank': event.plank,
            'rightSidePlank': event.rightSidePlank,
            'leftSidePlank': event.leftSidePlank,
            'rightSingleLegBridges': event.rightSingleLegBridges,
            'leftSingleLegBridges': event.leftSingleLegBridges,
            'rightHopTest1': event.rightHopTest1,
            'leftHopTest1': event.leftHopTest1,
            'rightHopTest2': event.rightHopTest2,
            'leftHopTest2': event.leftHopTest2,
            'rightWallSit': event.rightWallSit,
            'leftWallSit': event.leftWallSit,
            'rightPasseReleveBalance': event.rightPasseReleveBalance,
            'leftPasseReleveBalance': event.leftPasseReleveBalance,
            'rightPasseFlatFootBalance': event.rightPasseFlatFootBalance,
            'leftPasseFlatFootBalance': event.leftPasseFlatFootBalance,
            'ckcuest': event.ckcuest,
            'sitAndReach': event.sitAndReach,
            'RHTOF': event.RHTOF,
            'LHTOF': event.LHTOF,
            'RHTOD': event.RHTOD,
            'LHTOD': event.RHTOF,
            'workingLeg': event.workingLeg,
            'standingLeg': event.standingLeg,
            'threeMonthInjury': event.threeMonthInjury,
            'fiveYearInjury': event.fiveYearInjury,

        }
    }

    return ddb.put(params).promise();
}