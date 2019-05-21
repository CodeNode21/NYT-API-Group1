// Login for NYT API
// zabezic@quick-mail.club
// Group1!Columbia
// Example Call
// "https://api.nytimes.com/svc/search/v2/articlesearch.json?s=" {search} "&api-key=" APIKey

var apiKey = "Q8FwfTECj4RZ2ChsE8JsFI8medTLsz6b";
var searchField = "trump";
var articleURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchField+"&api-key="+apiKey;


console.log(articleURL);
$.ajax({
    url: articleURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    var article = response.response.docs[0];
    console.log(article);
});
numberOfRecords;
    $("#limit").

// Phase 2## Back-End Team
// * Create the AJAX call needed to retrieve data then console.log all of the relevant fields.
// * Incorporate various "optional parameters" (hard code these in initially).
// * Take note of various "bugs" that appear with certain searches.
// ## All-Together
// * Display the HTML content!!

// Phase 3 ## Back-End Team
// * Put in a hard-effort to deal with bugs. How can you handle missing fields?.


//search Term = searchField
//number of records can be 1, 5, or 10 
//start year 
//end year 
//



//***Similar to concat(), slice creates a copy of the array and extracts a subsequence of it. Used with no parameters, it returns a copy of the original. With one argument - index -, returns all elements from that index to the end. Additionally, it can be used with 2 arguments - start_index and end_index, in which case it will return all elements in that interval (excluding the one from last_index). */