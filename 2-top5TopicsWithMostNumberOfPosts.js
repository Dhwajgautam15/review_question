const posts = require("../reddit-dataset/posts.json");
const topics =require("../reddit-dataset/topics.json");

function top5TopicsWithMostNumberOfPosts(posts,topics){
let numberOfPosts={};
    for(let i in posts){
        if( numberOfPosts[posts[i].topicId]){
            numberOfPosts[posts[i].topicId] ++ 
        }
        else{
            numberOfPosts[posts[i].topicId] = 1
        }
    }
    // console.log(numberOfPosts);
   
const top5Posts = Object.entries(numberOfPosts).sort((a,b)=>b[1]-a[1]).slice(0,5);

let top5Topics = {};
for(let i in top5Posts){
    for(let j in topics){
        if(topics[j].id==top5Posts[i][0]){
            top5Topics[topics[j].name]=top5Posts[i][1]
        }
    }
    }
    console.log(top5Topics);


}
top5TopicsWithMostNumberOfPosts(posts,topics)