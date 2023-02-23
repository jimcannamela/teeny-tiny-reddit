# Teeny Tiny Reddit

Let's get some more practice with API requests, HTTP and fetch!  

## Reddit as a data source

Reddit is a popular website with sub-sections (or "subreddits") for just about every topic under the sun.  But did you know...  that it can also function as a data source?  By appending `.json` to the end of a subreddit's URL, you can get all the data used for that particular page.  

So, for example, if you were to visit the JavaScript subreddit, you would use the URL `https://www.reddit.com/r/javascript`.  To get the JSON for this page, you can send a GET request to the URL `https://www.reddit.com/r/javascript.json`.  

Your goal is to build a teeny, tiny website that allows users to search for subreddits, and then displays the results in teeny, tiny form.  It will only display more details if the user clicks on each post.

## project goals

You should implement the following features:

- [ ] When a user types the name of a subreddit into the search bar and hits the "search" button, your website should display all of the titles for reddit posts from that subreddit.  
- [ ] Search results should also display the username of the account that authored the post.
- [ ] When a user clicks a username, your site should redirect to their profile page on reddit.
- [ ] All errors coming from fetch calls should be displayed in user-friendly form in the "error-alert" div.
- [ ] Feel free to have fun with this!  Explore the data, think up interesting new features and try to implement them!  
- [ ] Some basic CSS is provided, but you can customize it so that your site reflects your style!

