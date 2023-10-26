const posts = require("../reddit-dataset/posts.json");
const votes = require("../reddit-dataset/votes.json");
const users = require("../reddit-dataset/users.json");

function top5MostActiveUsers(posts,votes,users){
let activeUsers={}
    for(let i in posts){
        if(activeUsers[posts[i].userId]){
            activeUsers[posts[i].userId] += 5
        }
        else{
            activeUsers[posts[i].userId] = 5
        }
    }
    for(let i in votes){
        if(activeUsers[votes[i].userId]){
            activeUsers[votes[i].userId] ++
        }
        else{
            activeUsers[votes[i].userId] = 1
        }

    }
    // console.log(activeUsers);

const top5ActiveUsers = Object.entries(activeUsers).sort((a,b) => b[1]-a[1]).slice(0,5);

let top5ActiveUser = {};
for(let i in top5ActiveUsers){
    for(let j in users){
        if(users[j].id==top5ActiveUsers[i][0]){
            top5ActiveUser[users[j].name]=top5ActiveUsers[i][1]
        }
    }
    }
    console.log(top5ActiveUser);

    
}
top5MostActiveUsers(posts,votes,users)