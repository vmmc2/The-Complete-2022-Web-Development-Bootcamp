var tweet = prompt("What are you thinking? ");
tweet = tweet.slice(0, 140);

window.alert("Your tweet has " + tweet.length + " characters.\n Here it is: " + tweet);
