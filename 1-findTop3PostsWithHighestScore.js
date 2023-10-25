const votes = require("../reddit-dataset/votes.json");

function top3PostsWithHighestScore(votes){
let voteId={};
for(let i in votes){
    if(voteId[votes[i].postId]){
        if(votes[i].type == 'up'){
        voteId[votes[i].postId]++;
        }
        else{
            voteId[votes[i].postId]--;
        }
    }
    else{
        if(votes[i].type == 'up'){
            voteId[votes[i].postId] =1;
            }
            else{
                voteId[votes[i].postId] = -1;
            }
    }
}

const voteArray = Object.entries(voteId)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);
console.log(voteArray);


}

top3PostsWithHighestScore(votes);