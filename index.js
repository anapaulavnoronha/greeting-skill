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
    let options = {};
    if (request.intent.name === "HelloIntent") {
      let name = request.intent.slots.FirstName.value;
      options.speechText = "Hello " + name + ". ";
      options.speechText += getWish();
      options.reprompt = "";
      options.endSession = true;
      context.succeed(buildResponse(options));
    } else {
      context.fail("Unknow Intent");
    }
  } else if (request.type === "SessionEndedRequest") {
  } else {
  }
};

function getWhish() {
  var myDate = new Data();
  var hours = myDate.getUTCHours() - 8;

  if (hours < 0) {
    hours = hours + 24;
  }

  if (hours < 12) {
    hours = "Good Morning. ";
  } else if (hours < 18) {
    hours = "Good Afternoon. ";
  } else {
    hours = "Good Evening. ";
  }
}

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
