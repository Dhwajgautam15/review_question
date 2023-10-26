const votes = require("../reddit-dataset/votes.json");

function top3PostsWithHighestScore(votes){
let highestScore={};
for(let i in votes){
    if(highestScore[votes[i].postId]){
        if(votes[i].type == 'up'){
        highestScore[votes[i].postId]++;
        }
        else{
            highestScore[votes[i].postId]--;
        }
    }
    else{
        if(votes[i].type == 'up'){
            highestScore[votes[i].postId] =1;
            }
            else{
                highestScore[votes[i].postId] = -1;
            }
    }
}

const top3HighestScore = Object.entries(highestScore)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);
console.log(top3HighestScore);


}

top3PostsWithHighestScore(votes);