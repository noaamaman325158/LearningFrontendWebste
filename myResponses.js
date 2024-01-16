function getBotResponse(input) {
    //where am i
    if (input == "What is this?") {
        return "The chat-bot of noaa maman website";
    } else if (input == "who?") {
        return "you know,noaa maman 19 years old from rosh pina";
    } else if (input == "what the goal") {
        return "learn new things in html,css, java-script and even we meet the jQuery library!";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
	
	//recommends
	if (input == "where to start?") {
        return "I recommend to you to start from the material web page, after you learned the material you can test yourself with two tests, be brave and do also the bounus part);";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
	
}