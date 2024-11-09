const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const movieList = movieLists[i]; // Get the correct list based on the arrow index
  arrow.addEventListener("click", () => {
    // Transform the movieList based on the arrow click
    // Ensure the correct container is moved
    movieList.style.transform = `translateX(-300px)`; // example transformation
  });
});
