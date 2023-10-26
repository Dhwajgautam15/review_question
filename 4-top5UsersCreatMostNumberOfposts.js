const posts = require("../reddit-dataset/posts.json");
const users =require("../reddit-dataset/users.json");

function top5UsersCreatMostNumberOfPost(posts,users){
let numberOfPosts={};


    for(let i in posts){
          numberOfPosts[posts[i].userId]=(numberOfPosts[posts[i].userId] || 0)+1; 
    }
    
    
let top5UsersPosts = Object.entries(numberOfPosts).sort((a,b)=>b[1]-a[1]).slice(0,5);

let topUserPosts={};
for(let i in top5UsersPosts){
for(let j in users){
    if(users[j].id==top5UsersPosts[i][0]){
        topUserPosts[users[j].name]=top5UsersPosts[i][1]
    }
}
}
console.log(topUserPosts);

}
 top5UsersCreatMostNumberOfPost(posts,users)
