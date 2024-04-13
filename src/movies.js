import { movies } from './data.js';

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const allDirectors = movies.map((movie) => movie.director);
  const uniqueDirectors = new Set(allDirectors);
  return Array.from(uniqueDirectors);
}
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  return movies.filter(function (movie) {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoreSum = 0;
  for (let i = 0; i < movies.length; i++) {
    scoreSum += movies[i].score;
  }
  return scoreSum / movies.length;
}

function shortenScoreSum(number) {
  return parseFloat(number.toFixed(2));
}
const avgScore = scoresAverage(movies);
console.log(shortenScoreSum(avgScore));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) {
    return 'There are no drama movies in the dataset.';
  }
  const totalScore = dramaMovies
    .map((movie) => movie.score)
    .reduce((acc, score) => acc + score, 0);
  return parseFloat((totalScore / dramaMovies.length).toFixed(2));
}
const avgScoreDrama = dramaMoviesScore(movies);
console.log(avgScoreDrama);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  return movies.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

const yearOrderedMovies = orderByYear(movies);
console.log(yearOrderedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
