var dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
    region: 'us-east-1'
})

// To use a local DynamoDB
dynamoose.local()

dynamoose.setDefaults(
    {
        create: true, // Create table in DB, if it does not exist,
        update: false, // Update remote indexes if they do not match local index structure
        waitForActive: true, // Wait for table to be created before trying to use it
        waitForActiveTimeout: 180000 // wait 3 minutes for table to activate
    }
)

module.exports = dynamoose