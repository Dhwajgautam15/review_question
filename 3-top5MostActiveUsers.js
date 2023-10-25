const posts = require("../reddit-dataset/posts.json");
const votes = require("../reddit-dataset/votes.json");
const users = require("../reddit-dataset/users.json");

function top5MostActiveUsers(posts,votes,users){
let postObj={}
    for(let i in posts){
        if(postObj[posts[i].userId]){
            postObj[posts[i].userId] += 5
        }
        else{
            postObj[posts[i].userId] = 5
        }
    }
    for(let i in votes){
        if(postObj[votes[i].userId]){
            postObj[votes[i].userId] ++
        }
        else{
            postObj[votes[i].userId] = 1
        }

    }
    // console.log(postObj);

const sorted = Object.entries(postObj).sort((a,b) => b[1]-a[1]).slice(0,5);

let ans = {};
for(let i in sorted){
    for(let j in users){
        if(users[j].id==sorted[i][0]){
            ans[users[j].name]=sorted[i][1]
        }
    }
    }
    console.log(ans);

    
}
top5MostActiveUsers(posts,votes,users)