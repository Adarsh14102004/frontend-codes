for (let post of posts) {
    let score =
        post.likes +
        post.comments * 2 +
        post.shares * 3;

    if (score > 300) {
        console.log(post.postId);
    }
}