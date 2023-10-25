const posts = require("../reddit-dataset/posts.json");
const users =require("../reddit-dataset/users.json");

function top5UsersCreatMostNumberOfPost(posts,users){
let postObj1={};
console.log(posts);

    for(let i in posts){
          postObj1[posts[i].userId]=(postObj1[posts[i].userId] || 0)+1; 
    }
    
    
let sorted = Object.entries(postObj1).sort((a,b)=>b[1]-a[1]).slice(0,5);

let ans={};
for(let i in sorted){
for(let j in users){
    if(users[j].id==sorted[i][0]){
        ans[users[j].name]=sorted[i][1]
    }
}
}
console.log(ans);

}
 top5UsersCreatMostNumberOfPost(posts,users)
