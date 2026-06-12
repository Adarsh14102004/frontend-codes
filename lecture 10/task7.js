let genres = {};

for (let movie of movies) {
    if (movie.rating > 8) {

        for (let genre of movie.genres) {
            genres[genre] = (genres[genre] || 0) + 1;
        }
    }
}

console.log(genres);