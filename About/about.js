const submitButton = document.getElementById("submitFeedback");
const suggestion = document.getElementById("fback");
submitButton.addEventListener('click', submitFeedback);


function submitFeedback() {
    var suggestionArray = [];
    if (suggestion.value === "") {
        alert("Please input a suggestion before clicking submit");
    } else {
        suggestionArray.push(suggestion.value);
        console.log(`${suggestion.value}`);
        alert("Thanks for your feedback!");
    }
    suggestion.value = "";
}

