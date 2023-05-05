// fetch("https://www.reddit.com/r/javascript.json")
// .catch(err => console.error(err))
// .then(data => data.json())
// .then(console.log)

// Set the search box value = to user input and store it on button click(eventListener) DONE

//Return all the subreddit posts from the value we stored DONE

//Display/store username and account for the author of the post DONE

//Append errors to the error alert div- DONE

const searchBarSubmit = document.querySelector("#search-bar-submit")
const resultsList = document.body.querySelector('#search-results-list');
const errorSpan = document.body.querySelector('#error-alert span');
const errorDiv = document.body.querySelector('#error-alert');

searchBarSubmit.addEventListener("click", function(event)  {
    event.preventDefault();

    const searchBar = document.querySelector("#search-bar").value;
    errorDiv.classList.toggle('hidden',true)

    if(!searchBar){
        console.error("Empty Value")
        return alert("You must input a subreddit name");
    };

    const URL = `https://www.reddit.com/r/${searchBar}.json`

    const response = fetch(URL).catch(err => console.log(err))

    response
        .then(response => {
            if(response.status !== 200){
                throw Error('Subreddit not found')
            }
            while(resultsList.firstChild){
                resultsList.removeChild(resultsList.firstChild);
            }
            return response.json()
        })
        .then(response => {
            for(let post of response.data.children){
                console.log(post)
                getSubredditValues(post.data)
            }
        })
        .catch(function(error) {
            errorSpan.innerText = error;
            errorDiv.classList.toggle("hidden",false)
        });
});

function getSubredditValues(APIresponse){
    const values = {
        title : APIresponse.title,
        authorName : APIresponse.author,
        authorLink : `https://www.reddit.com/user/${APIresponse.author}/`,
        upvotes : APIresponse.ups,
        subURL : APIresponse.url,
        numComments : APIresponse.num_comments,
        dateCreated : APIresponse.created
    }
    insertData(values);
}

function insertData(postValues) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(postValues.dateCreated)
    const listItem = document.createElement('li');
    const subTitle = document.createElement('h2');
    const authorTag = document.createElement('p');
    const authorLink = document.createElement('a');
    const upvote = document.createElement('p');
    const subLink = document.createElement('a');
    const timeSpan = document.createElement('span');

    authorLink.setAttribute("href",postValues.authorLink)
    authorLink.innerText = `✍️ Author: ${postValues.authorName}`
    timeSpan.innerText = ` 📅 Date Posted: ${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`
    upvote.innerText = `👍 Votes: ${postValues.upvotes} 💬 Comments: ${postValues.numComments}`
    subLink.setAttribute("href", postValues.subURL);
    subLink.innerText = postValues.title;
    upvote.classList.add("votemoji")
    
    subTitle.append(subLink)
    listItem.append(subTitle);
    authorTag.append(authorLink);
    authorTag.append(timeSpan);
    listItem.append(authorTag);
    listItem.append(upvote);

    resultsList.append(listItem)
}
