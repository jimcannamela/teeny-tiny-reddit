fetch("https://www.reddit.com/r/javascript.json")
.catch(err => console.error(err))
.then(data => data.json())
.then(console.log)