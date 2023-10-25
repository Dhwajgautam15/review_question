const posts = require("../reddit-dataset/posts.json");
const topics =require("../reddit-dataset/topics.json");

function top5postsWithMostNumberOfPosts(posts,topics){
let topicObj={};
    for(let i in posts){
        if( topicObj[posts[i].topicId]){
            topicObj[posts[i].topicId] ++ 
        }
        else{
            topicObj[posts[i].topicId] = 1
        }
    }
    // console.log(topicObj);
   
const sorted = Object.entries(topicObj).sort((a,b)=>b[1]-a[1]).slice(0,5);

let ans = {};
for(let i in sorted){
    for(let j in topics){
        if(topics[j].id==sorted[i][0]){
            ans[topics[j].name]=sorted[i][1]
        }
    }
    }
    console.log(ans);


}
top5postsWithMostNumberOfPosts(posts,topics)