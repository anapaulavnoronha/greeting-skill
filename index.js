exports.handler = function(event, context) {
  var request = event.request;

  if (request.type === "LaunchRequest") {
    let options = {};
    options.speechText =
      "Welcome to greeting skill. Using our skill you can greet your guests. Whom you want to greet?";
    options.reprompt = "You can say for example, say hello to John";
    options.endSession = false;
    context.succeed(buildResponse(options));
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
