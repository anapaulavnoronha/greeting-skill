exports.handler = function(event, context) {
  var request = event.request;

  if (request.type === "LaunchRequest") {
  } else if (request.type === "IntentRequest") {
  } else if (request.type === "SessionEndedRequest") {
  } else {
  }
};

function buildResponse(options) {
  var response = {
    version: "1.0",
    response: {
      outputSpeech: {
        type: "PlainText",
        text: options.speechText
      },
      shouldEndSession: options.endSession
    }
  };

  if (response.repromptText) {
    response.response.reprompt = {
      outputSpeech: {
        type: "PlainText",
        text: options.repromptText
      }
    };
  }
}
