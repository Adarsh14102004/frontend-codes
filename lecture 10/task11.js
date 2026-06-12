let topRepo = "";
let maxScore = 0;

for (let repo of repos) {

    let score = repo.stars * 2 + repo.forks;

    if (score > maxScore) {
        maxScore = score;
        topRepo = repo.repo;
    }
}

console.log(topRepo);