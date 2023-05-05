// fetch("https://www.reddit.com/r/javascript.json")
// .catch(err => console.error(err))
// .then(data => data.json())
// .then(console.log)

// Set the search box value = to user input and store it on button click(eventListener) DONE

//Return all the subreddit posts from the value we stored

//Display/store username and account for the author of the post

//Append errors to the error alert div

const searchBarSubmit = document.querySelector("#search-bar-submit")

searchBarSubmit.addEventListener("click", function(event)  {
    event.preventDefault();

    const searchBar = document.querySelector("#search-bar").value;

    if(!searchBar){
        console.error("Empty Value")
        return alert("You must input a subreddit name");
    };

    const URL = `https://www.reddit.com/r/${searchBar}.json`

    const response = fetch(URL)

    response
        .then(response => {
            return response.json()
        })
        .then(response => {
            for(let post of response.data.children){
                console.log(post)
                getSubredditValues(post)
            }
        })

});

function getSubredditValues(APIresponse){
    const values = {
        title : APIresponse.title,
        authorName : APIresponse.author,
        authorLink : `https://www.reddit.com/user/${APIresponse.author}/`,
        upvotes : APIresponse.ups
    }
    console.log(values)
}
