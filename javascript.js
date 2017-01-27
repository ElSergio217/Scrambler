(function() {
	// Answer goes here.
	var hiddenMessage = ""; 
	$( document ).ready(function() { //Detects the state of readiness in page.

		//unscrambling the hidden message:
		var spn = document.getElementsByTagName("span"); //Finds all existing tags in the page.
		for(i = 0;i < spn.length; i++){ //For loop to find all hidden spans.
			if(spn[i].hidden == true){
				hiddenMessage += spn[i].innerHTML; //If span is hidden it adds the innerHTML value to the hiddenMessage variable.
			}
		}
		console.log(hiddenMessage); //After loop is complete, the message is posted in the console.
						
		//scrambling the hidden message:
		var scramble = "";
		var spanCount = 0;// Count the spans as they generate
		for(i = 0;i < hiddenMessage.length; i++){// Create a hidden span for each letter of the message we want to hide
			scramble += "<span hidden>" + hiddenMessage[i] + "</span>"; // Each span is added to the scamble varible string.
			spanCount++;// Adds one to the spanCount varible

			var random = Math.random().toString(36).substring(7);// Generates a set of random characters
			for(x = 0;x < random.length; x++){// Creates a span for each character in the string
				scramble+="<span>" + random[x] + "</span>";// Each span is added to the scamble varible string.
				spanCount++;// Adds one to the spanCount varible
				if(spanCount > 99){// If spanCount varible is over 99
					scramble+="</br>"// It adds a break tag to create another line 
					spanCount = 0;// Resets the spanCount back to 0
				}
			}
		}
		document.body.innerHTML = scramble; //Over writes the body innnerHTML with scramble.
	});
})();