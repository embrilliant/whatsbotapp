var cases = { 
			"how are you": "I am fine. What about you?",
			"lonely": "Go to Berlin, where you will not be bored and lonely.",
			"what are you doing": "I am talking to you.",
			"wearing": "Whatever you imagine.",
			"hungry": "How about eating something?",
			"bored": "How about playing some computer games?",
			"bad": "What happened?",
			"dumped": "There's plenty of fish.",
			"tired": "It's good to have enough sleep.",
			"m thirsty": "Get some drink!",
			"how old": "Age doesn't matter.",
			"your name": "You can call me whatever you want.",
			"what i said": "I understand.",
			"why": "You will find out why.",
			"you like": "I like most things.",
			" hi": "Hello.",
			"hello": "Hi.",
			"marry": ":)",
			"love you": "I know.",
			"you want": "What are you looking for?",
			"m looking for": "This is not the droid you're looking for.",
			"bye": "Bye.",
			"cool": "Cool stuff.",
			"cute": "You are cute, too.",
			"awesome": "Awesome.",
			"yourself": "You will find out more about me by yourself.",
			"emily": "I am made by Emily.",
			"good": "Sounds good.",
			"idiot": "Please be nice.",
			"problem": "Problems always exist.",
			"sleepy": "Maybe it's time for bed?",
			randRes: ["Ok, I don't know what to say.", "Alright.", "Ok.", "Tell me about it.", "Oh?", "Fair enough.", "I’ve got a bad feeling about this.", "I don't know.", "Right."]
		};

class Robot {
	constructor() {
	}

	initialHi(textString) {
		return ( textString == "hi" || textString == "hi." || textString == "hi!" );
	}

	respond(textString) {
		var response = '';
		var stringLowerCased = textString.toLowerCase();

		this.initialHi = this.initialHi.bind(this);

		if ( this.initialHi( stringLowerCased ) ) {
			response = cases[" hi"];
		} else {
			for (let key in cases) {
		        if (stringLowerCased.indexOf(key) >= 0) {
		            response = cases[key];

		            return response;
		        } else {
					let ran = Math.floor( (Math.random() * ( cases.randRes.length + 1 ) ) );
					if (ran < cases.randRes.length) {
						response = cases.randRes[ran];
					} else {
						response = textString;
					}
		      	}
		    }
		}

		return response;
	}

	getResponse(textString) {
	    return this.respond(textString);
	}
}

export default Robot